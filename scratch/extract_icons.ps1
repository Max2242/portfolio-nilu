Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

# Let's crop the Behance 3D icon with a little padding
$bIconX = 50
$bIconY = 428
$bIconW = 52
$bIconH = 52

$bBmp = New-Object System.Drawing.Bitmap($bIconW, $bIconH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bBmp)
$g.DrawImage($src, 0, 0, (New-Object System.Drawing.Rectangle($bIconX, $bIconY, $bIconW, $bIconH)), [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

# Make background transparent if it matches background #FCF8F5
for ($x = 0; $x -lt $bIconW; $x++) {
  for ($y = 0; $y -lt $bIconH; $y++) {
    $c = $bBmp.GetPixel($x, $y)
    $diff = [Math]::Abs($c.R - 252) + [Math]::Abs($c.G - 248) + [Math]::Abs($c.B - 245)
    if ($diff -le 6) {
      $bBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    }
  }
}
$bBmp.Save("c:\Users\nilak\projects\portfolio-nilu\src\assets\icon-behance-3d.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bBmp.Dispose()

# LinkedIn 3D icon
$lIconX = 310
$lIconY = 428
$lIconW = 50
$lIconH = 50

$lBmp = New-Object System.Drawing.Bitmap($lIconW, $lIconH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($lBmp)
$g.DrawImage($src, 0, 0, (New-Object System.Drawing.Rectangle($lIconX, $lIconY, $lIconW, $lIconH)), [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

for ($x = 0; $x -lt $lIconW; $x++) {
  for ($y = 0; $y -lt $lIconH; $y++) {
    $c = $lBmp.GetPixel($x, $y)
    $diff = [Math]::Abs($c.R - 252) + [Math]::Abs($c.G - 248) + [Math]::Abs($c.B - 245)
    if ($diff -le 6) {
      $lBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    }
  }
}
$lBmp.Save("c:\Users\nilak\projects\portfolio-nilu\src\assets\icon-linkedin-3d.png", [System.Drawing.Imaging.ImageFormat]::Png)
$lBmp.Dispose()

$bmp.Dispose()
$src.Dispose()

Write-Host "Icons extracted!"
