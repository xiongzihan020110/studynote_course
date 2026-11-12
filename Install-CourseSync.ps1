param(
    [Parameter(Mandatory=$true)][string]$Source,
    [string]$Python = 'python.exe',
    [string]$Git = 'git.exe',
    [switch]$Run
)
$ErrorActionPreference = 'Stop'
$sync = Join-Path $PSScriptRoot 'sync_course_notes.py'
$logDir = Join-Path $env:LOCALAPPDATA 'StudynoteSync'
if ($Run) {
    New-Item -ItemType Directory -Path $logDir -Force | Out-Null
    $log = Join-Path $logDir 'sync.log'
    Add-Content -LiteralPath $log -Value "$(Get-Date -Format o) Sync started"
}
try {
    $Source = (Resolve-Path -LiteralPath $Source).Path
    $Python = (Get-Command $Python -CommandType Application).Source
    $Git = (Get-Command $Git -CommandType Application).Source
    $null = Get-Item -LiteralPath $sync
} catch {
    if ($Run) {
        Add-Content -LiteralPath $log -Value "$(Get-Date -Format o) Startup failed: $($_.Exception.Message)"
        exit 1
    }
    throw
}
if ($Run) {
    $ErrorActionPreference = 'Continue'
    & $Python $sync $Source --git $Git 2>&1 |
        ForEach-Object { $_.ToString() } |
        Out-File -LiteralPath $log -Append -Encoding utf8
    $exitCode = $LASTEXITCODE
    Add-Content -LiteralPath $log -Value "$(Get-Date -Format o) Sync finished (exit code $exitCode)"
    exit $exitCode
}

$credential = "protocol=https`nhost=github.com`n`n" | & $Git credential fill
if (-not ($credential -match '^password=.+')) { throw 'Sign in to GitHub through Git Credential Manager first.' }
Remove-Variable credential
& $Python $sync $Source --git $Git --check
if ($LASTEXITCODE -ne 0) { throw 'The source check failed.' }
& $Python $sync $Source --git $Git
if ($LASTEXITCODE -ne 0) { throw 'The first sync failed. See the Git error above.' }
$exe = Join-Path $env:SystemRoot 'System32\WindowsPowerShell\v1.0\powershell.exe'
$arguments = '-NoProfile -ExecutionPolicy Bypass -File "{0}" -Source "{1}" -Python "{2}" -Git "{3}" -Run' -f $PSCommandPath,$Source,$Python,$Git
$action = New-ScheduledTaskAction -Execute $exe -Argument $arguments
$trigger = New-ScheduledTaskTrigger -Daily -At '22:00'
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -MultipleInstances IgnoreNew -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries
$user = [Security.Principal.WindowsIdentity]::GetCurrent().Name
$principal = New-ScheduledTaskPrincipal -UserId $user -LogonType Interactive
Register-ScheduledTask -TaskName 'Studynote Course Sync' -Action $action -Trigger $trigger -Settings $settings -Principal $principal -Force | Out-Null
Write-Output "Scheduled daily at 22:00 local time for $user. Log: $logDir"
