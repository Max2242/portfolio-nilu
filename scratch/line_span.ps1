Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

$yList = @()
for ($y = 140; $y -lt 350; $y++) {
  $c = $bmp.GetPixel(56, $y)
  $diff = [Math]::Abs($c.R - 252) + [Math]::Abs($c.G - 248) + [Math]::Abs($c.B - 245)
  if ($diff -gt 10) {
    $yList += $y
  }
}

if ($yList.Count -gt 0) {
  $minY = ($yList | Measure-Object -Minimum).Minimum
  $maxY = ($yList | Measure-Object -Maximum).Maximum
  Write-Host "Line at X=56 runs from Y=$minY to Y=$maxY (Height=$($maxY - $minY))"
}

$bmp.Dispose()
$src.Dispose()
