Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

# Behance: x=48, y=428, w=194, h=52
$bRect = New-Object System.Drawing.Rectangle(48, 428, 194, 52)
$bBmp = New-Object System.Drawing.Bitmap(194, 52, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bBmp)
$g.DrawImage($src, 0, 0, $bRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

for ($x = 0; $x -lt 194; $x++) {
  for ($y = 0; $y -lt 52; $y++) {
    $c = $bBmp.GetPixel($x, $y)
    $diff = [Math]::Abs($c.R - 252) + [Math]::Abs($c.G - 248) + [Math]::Abs($c.B - 245)
    if ($diff -le 5) {
      $bBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    }
  }
}
$bBmp.Save("c:\Users\nilak\projects\portfolio-nilu\src\assets\btn-behance.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bBmp.Dispose()

# LinkedIn: x=308, y=428, w=194, h=52
$lRect = New-Object System.Drawing.Rectangle(308, 428, 194, 52)
$lBmp = New-Object System.Drawing.Bitmap(194, 52, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($lBmp)
$g.DrawImage($src, 0, 0, $lRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

for ($x = 0; $x -lt 194; $x++) {
  for ($y = 0; $y -lt 52; $y++) {
    $c = $lBmp.GetPixel($x, $y)
    $diff = [Math]::Abs($c.R - 252) + [Math]::Abs($c.G - 248) + [Math]::Abs($c.B - 245)
    if ($diff -le 5) {
      $lBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    }
  }
}
$lBmp.Save("c:\Users\nilak\projects\portfolio-nilu\src\assets\btn-linkedin.png", [System.Drawing.Imaging.ImageFormat]::Png)
$lBmp.Dispose()

$bmp.Dispose()
$src.Dispose()

Write-Host "Perfect buttons cropped!"
