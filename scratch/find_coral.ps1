Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

for ($x = 40; $x -lt 80; $x++) {
  for ($y = 200; $y -lt 300; $y++) {
    $c = $bmp.GetPixel($x, $y)
    if ($c.R -gt 150 -and ($c.R - $c.G) -gt 40) {
      Write-Host ('Found pixel at X=' + $x + ', Y=' + $y + ': R=' + $c.R + ' G=' + $c.G + ' B=' + $c.B)
    }
  }
}

$bmp.Dispose()
$src.Dispose()
