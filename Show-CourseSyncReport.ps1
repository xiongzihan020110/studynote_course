param([int]$TimeoutSeconds = 180)

$ErrorActionPreference = 'Stop'
$taskName = 'Studynote Course Sync'
$log = Join-Path $env:LOCALAPPDATA 'StudynoteSync\sync.log'
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

Add-Type -AssemblyName System.Windows.Forms
$form = New-Object Windows.Forms.Form
$form.Text = "知识库同步 · $result"
$form.Width = 780
$form.Height = 500
$form.StartPosition = 'CenterScreen'
$form.TopMost = $true
$body = New-Object Windows.Forms.TextBox
$body.Multiline = $true
$body.ReadOnly = $true
$body.ScrollBars = 'Both'
$body.WordWrap = $false
$body.Dock = 'Fill'
$body.Text = $details -replace '(?<!\r)\n', "`r`n"
$form.Controls.Add($body)
[void]$form.ShowDialog()
$form.Dispose()
