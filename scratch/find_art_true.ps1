Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

$bgR = 252; $bgG = 248; $bgB = 245

$minArtX = 1024
$maxArtX = 0
$minArtY = 622
$maxArtY = 0

for ($x = 560; $x -le 1020; $x++) {
  for ($y = 6; $y -le 618; $y++) {
    $c = $bmp.GetPixel($x, $y)
    $diff = [Math]::Abs($c.R - $bgR) + [Math]::Abs($c.G - $bgG) + [Math]::Abs($c.B - $bgB)
    if ($diff -gt 15) {
      if ($x -lt $minArtX) { $minArtX = $x }
      if ($x -gt $maxArtX) { $maxArtX = $x }
      if ($y -lt $minArtY) { $minArtY = $y }
      if ($y -gt $maxArtY) { $maxArtY = $y }
    }
  }
}

Write-Host "True Artwork bounds: X=$minArtX to $maxArtX (w=$($maxArtX-$minArtX)), Y=$minArtY to $maxArtY (h=$($maxArtY-$minArtY))"

$bmp.Dispose()
$src.Dispose()
