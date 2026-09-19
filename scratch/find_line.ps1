Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

for ($x = 40; $x -lt 70; $x++) {
  for ($y = 100; $y -lt 400; $y++) {
    $c = $bmp.GetPixel($x, $y)
    $diff = [Math]::Abs($c.R - 252) + [Math]::Abs($c.G - 248) + [Math]::Abs($c.B - 245)
    if ($diff -gt 15) {
      Write-Host ('X=' + $x + ', Y=' + $y + ': R=' + $c.R + ' G=' + $c.G + ' B=' + $c.B)
      break
    }
  }
}

$bmp.Dispose()
$src.Dispose()
