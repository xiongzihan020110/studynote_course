param([int]$TimeoutSeconds = 180)

$ErrorActionPreference = 'Stop'
$taskName = 'Studynote Course Sync'
$log = Join-Path $env:LOCALAPPDATA 'StudynoteSync\sync.log'

$requested = Get-Date
[Console]::OutputEncoding = [Text.Encoding]::UTF8
$git = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe'
$source = 'D:\个人知识库\小熊同学知识库\Malaysia_Datascience'
function Read-Git([string[]]$gitArgs) {
    $lines = @(& $git -C $PSScriptRoot -c "safe.directory=$($PSScriptRoot.Replace('\','/'))" -c core.quotepath=false @gitArgs 2>$null)
    if ($LASTEXITCODE -ne 0) { throw "Git 读取失败：$($gitArgs[0])" }
    $lines
}
$remoteBefore = try { Read-Git @('rev-parse','origin/main') } catch { $null }

$result = '同步未完成'
$details = ''
try {
    $task = Get-ScheduledTask -TaskName $taskName
    $before = if (Test-Path -LiteralPath $log) {
        Get-Content -LiteralPath $log -Raw -Encoding UTF8
    }
    if ($task.State -eq 'Running') {
        $started = ([string]$before).LastIndexOf(' Sync started')
        if ($started -ge 0) {
            $before = $before.Substring(0, $before.LastIndexOf("`n", $started) + 1)
        }
    } else {
        Start-ScheduledTask -TaskName $taskName
    }
    $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
    do {
        Start-Sleep -Milliseconds 700
        if (Test-Path -LiteralPath $log) {
            $current = Get-Content -LiteralPath $log -Raw -Encoding UTF8
            if ($current -and (!$before -or $current.StartsWith($before))) {
                $details = $current.Substring(([string]$before).Length).Trim()
            }
        }
        if ($details -match '(?m)Sync finished \(exit code (\d+)\)') {
            $result = if ($Matches[1] -eq '0') { '同步成功' } else { '同步失败' }
            break
        }
        if ($details -match '(?m)Startup failed:') {
            $result = '启动失败'
            break
        }
    } while ((Get-Date) -lt $deadline)
    if ($result -eq '同步未完成') {
        $info = Get-ScheduledTaskInfo -TaskName $taskName
        $details += "`r`n等待超时。上次运行：$($info.LastRunTime)；任务返回值：$($info.LastTaskResult)"
    }
} catch {
    $result = '启动失败'
    $details = $_.Exception.Message
}


$start = $requested.ToString('yyyy-MM-dd HH:mm:ss zzz')
$end = '未确认'
if ($details -match '(?m)^(\S+) Sync started') {
    $start = ([datetimeoffset]::Parse($Matches[1])).ToString('yyyy-MM-dd HH:mm:ss zzz')
}
if ($details -match '(?m)^(\S+) Sync finished') {
    $end = ([datetimeoffset]::Parse($Matches[1])).ToString('yyyy-MM-dd HH:mm:ss zzz')
}
$report = @("同步结果  $result", "开始时间  $start", "结束时间  $end", '')
try {
    $remoteAfter = Read-Git @('rev-parse','origin/main')
    $root = '马来西亚-数据科学硕士'
    $prefix = "knowledge-base/$root/"
    if ($remoteBefore) {
        $changes = @{ A = @(); M = @(); D = @() }
        foreach ($line in (Read-Git @('diff','--name-status','--no-renames',$remoteBefore,$remoteAfter,'--',$prefix))) {
            $status, $path = $line -split '\t', 2
            if ($changes.ContainsKey($status) -and $path.StartsWith($prefix)) {
                $changes[$status] += $path.Substring($prefix.Length)
            }
        }
        foreach ($item in @(@{Key='A';Label='新增'}, @{Key='M';Label='修改'}, @{Key='D';Label='删除'})) {
            $items = $changes[$item.Key]
            $report += "$($item.Label)文件（$($items.Count)）"
            $report += @($items | ForEach-Object { "  $_" })
        }
    } else {
        $report += '无法读取同步前的提交，改动明细见原始日志。'
    }
    $local = @(Get-ChildItem -LiteralPath $source -Recurse | ForEach-Object {
        $relative = $_.FullName.Substring($source.Length + 1).Replace('\','/')
        if ($relative -notmatch '(^|/)\.' -and -not ($_.Attributes -band [IO.FileAttributes]::ReparsePoint)) {
            if ($_.PSIsContainer) { "$relative/" } else { $relative }
        }
    })
    $report += @('', '本地文件结构', "  $source")
    $report += @($local | Sort-Object | ForEach-Object { "  $_" })

    $siteHtml = (Read-Git @('show', ('{0}:index.html' -f $remoteAfter))) -join [char]10
    $fileMatch = [regex]::Match($siteHtml, '\bfiles=(\[.*?\]), prefix=')
    $folderMatch = [regex]::Match($siteHtml, '(?m)^\s*const syncedFolders=(\[.*\]);$')
    if (!$fileMatch.Success) { throw '没有找到网站文件清单。' }
    $site = @(ConvertFrom-Json -InputObject $fileMatch.Groups[1].Value | ForEach-Object {
        $path = [Uri]::UnescapeDataString($_.path)
        if ($path.StartsWith("$root/")) { $path.Substring($root.Length + 1) }
    })
    if ($folderMatch.Success) {
        $site += @(ConvertFrom-Json -InputObject $folderMatch.Groups[1].Value | ForEach-Object { "$_/" })
    }
    $report += @('', '网站文件结构（GitHub main，网页发布可能有延迟）')
    $siteParents = foreach ($path in $site) {
        $parent = $path.TrimEnd('/')
        while ($parent.Contains('/')) {
            $parent = $parent.Substring(0, $parent.LastIndexOf('/'))
            "$parent/"
        }
    }
    $report += @(@($site) + @($siteParents) | Sort-Object -Unique | ForEach-Object { "  $_" })
} catch {
    $report += @('', "读取目录或改动清单失败：$($_.Exception.Message)")
}
$report += @('', '原始日志', $details)

Add-Type -AssemblyName System.Windows.Forms
$form = New-Object Windows.Forms.Form
$form.Text = "知识库同步 · $result"
$form.Width = 780
$form.Height = 640
$form.StartPosition = 'CenterScreen'
$form.TopMost = $true
$body = New-Object Windows.Forms.TextBox
$body.Multiline = $true
$body.ReadOnly = $true
$body.ScrollBars = 'Both'
$body.WordWrap = $false
$body.Dock = 'Fill'
$body.Text = ($report -join [Environment]::NewLine) -replace '(?<!\r)\n', "`r`n"
$form.Controls.Add($body)
[void]$form.ShowDialog()
$form.Dispose()
