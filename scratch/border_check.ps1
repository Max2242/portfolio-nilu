Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

Write-Host "Width=$($bmp.Width), Height=$($bmp.Height)"

# Check corners and borders
for ($y = 0; $y -lt 15; $y++) {
  $c = $bmp.GetPixel(500, $y)
  Write-Host ('Y=' + $y + ': R=' + $c.R + ' G=' + $c.G + ' B=' + $c.B)
}

$bmp.Dispose()
$src.Dispose()
