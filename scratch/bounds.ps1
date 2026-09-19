Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

$cTopLeft = $bmp.GetPixel(10, 10)
Write-Host "TopLeft Color: R=$($cTopLeft.R) G=$($cTopLeft.G) B=$($cTopLeft.B) Hex=$([System.Drawing.ColorTranslator]::ToHtml($cTopLeft))"

$bgR = $cTopLeft.R
$bgG = $cTopLeft.G
$bgB = $cTopLeft.B

$minX = 1024
$maxX = 0
$minY = 622
$maxY = 0

for ($x = 520; $x -lt 1020; $x++) {
  for ($y = 4; $y -lt 618; $y++) {
    $c = $bmp.GetPixel($x, $y)
    $diff = [Math]::Abs($c.R - $bgR) + [Math]::Abs($c.G - $bgG) + [Math]::Abs($c.B - $bgB)
    if ($diff -gt 12) {
      if ($x -lt $minX) { $minX = $x }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }
}

Write-Host "Artwork bounding box: X=$minX to $maxX (width=$($maxX-$minX)), Y=$minY to $maxY (height=$($maxY-$minY))"

$bmp.Dispose()
$src.Dispose()
