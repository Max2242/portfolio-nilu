Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

$bgR = 252; $bgG = 248; $bgB = 245

for ($x = 520; $x -lt 620; $x += 10) {
  $diffCount = 0
  for ($y = 4; $y -lt 618; $y++) {
    $c = $bmp.GetPixel($x, $y)
    $diff = [Math]::Abs($c.R - $bgR) + [Math]::Abs($c.G - $bgG) + [Math]::Abs($c.B - $bgB)
    if ($diff -gt 15) { $diffCount++ }
  }
  Write-Host "X=$x : diffCount=$diffCount"
}

$bmp.Dispose()
$src.Dispose()
