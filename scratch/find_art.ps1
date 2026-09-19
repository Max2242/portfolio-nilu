Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

$bgR = 252; $bgG = 248; $bgB = 245

for ($x = 580; $x -lt 620; $x++) {
  for ($y = 4; $y -lt 618; $y++) {
    $c = $bmp.GetPixel($x, $y)
    $diff = [Math]::Abs($c.R - $bgR) + [Math]::Abs($c.G - $bgG) + [Math]::Abs($c.B - $bgB)
    if ($diff -gt 15) {
      Write-Host "First artwork pixel found at X=$x, Y=$y (Color: $($c.R),$($c.G),$($c.B))"
      break
    }
  }
  if ($diff -gt 15) { break }
}

$bmp.Dispose()
$src.Dispose()
