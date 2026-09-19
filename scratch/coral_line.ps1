Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

$coralPixels = @()

# Search in x: 40 to 80, y: 150 to 350
for ($x = 40; $x -lt 80; $x++) {
  for ($y = 150; $y -lt 350; $y++) {
    $c = $bmp.GetPixel($x, $y)
    # Coral color check: R > 200, G between 80 and 130, B between 60 and 100
    if ($c.R -gt 200 -and $c.G -lt 140 -and $c.B -lt 110) {
      $coralPixels += [PSCustomObject]@{X=$x; Y=$y; Color=$c}
    }
  }
}

if ($coralPixels.Count -gt 0) {
  $minY = ($coralPixels | Measure-Object -Property Y -Minimum).Minimum
  $maxY = ($coralPixels | Measure-Object -Property Y -Maximum).Maximum
  $minX = ($coralPixels | Measure-Object -Property X -Minimum).Minimum
  $maxX = ($coralPixels | Measure-Object -Property X -Maximum).Maximum
  Write-Host "Coral Line bounds: X=$minX to $maxX, Y=$minY to $maxY (Height=$($maxY - $minY))"
} else {
  Write-Host "No coral pixels found with this filter"
}

$bmp.Dispose()
$src.Dispose()
