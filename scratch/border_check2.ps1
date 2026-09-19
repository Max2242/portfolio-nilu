Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

Write-Host "Bottom check:"
for ($y = 610; $y -lt 622; $y++) {
  $c = $bmp.GetPixel(500, $y)
  Write-Host ('Y=' + $y + ': R=' + $c.R + ' G=' + $c.G + ' B=' + $c.B)
}

Write-Host "Right check:"
for ($x = 1010; $x -lt 1024; $x++) {
  $c = $bmp.GetPixel($x, 300)
  Write-Host ('X=' + $x + ': R=' + $c.R + ' G=' + $c.G + ' B=' + $c.B)
}

$bmp.Dispose()
$src.Dispose()
