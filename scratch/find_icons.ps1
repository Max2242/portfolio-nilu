Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

# Search for the blue icons (Behance and LinkedIn) in the bottom-left quadrant (x: 40 to 400, y: 400 to 550)
$behancePixels = @()
$linkedinPixels = @()

for ($x = 40; $x -lt 450; $x++) {
  for ($y = 400; $y -lt 550; $y++) {
    $c = $bmp.GetPixel($x, $y)
    # Blue color check: B > 180 and R < 50
    if ($c.B -gt 180 -and $c.R -lt 50) {
      if ($x -lt 150) {
        $behancePixels += [PSCustomObject]@{X=$x; Y=$y}
      } else {
        $linkedinPixels += [PSCustomObject]@{X=$x; Y=$y}
      }
    }
  }
}

if ($behancePixels.Count -gt 0) {
  $bMinX = ($behancePixels | Measure-Object -Property X -Minimum).Minimum
  $bMaxX = ($behancePixels | Measure-Object -Property X -Maximum).Maximum
  $bMinY = ($behancePixels | Measure-Object -Property Y -Minimum).Minimum
  $bMaxY = ($behancePixels | Measure-Object -Property Y -Maximum).Maximum
  Write-Host "Behance 3D Icon bounds: X=$bMinX to $bMaxX (w=$($bMaxX-$bMinX)), Y=$bMinY to $bMaxY (h=$($bMaxY-$bMinY))"
}

if ($linkedinPixels.Count -gt 0) {
  $lMinX = ($linkedinPixels | Measure-Object -Property X -Minimum).Minimum
  $lMaxX = ($linkedinPixels | Measure-Object -Property X -Maximum).Maximum
  $lMinY = ($linkedinPixels | Measure-Object -Property Y -Minimum).Minimum
  $lMaxY = ($linkedinPixels | Measure-Object -Property Y -Maximum).Maximum
  Write-Host "LinkedIn 3D Icon bounds: X=$lMinX to $lMaxX (w=$($lMaxX-$lMinX)), Y=$lMinY to $lMaxY (h=$($lMaxY-$lMinY))"
}

$bmp.Dispose()
$src.Dispose()
