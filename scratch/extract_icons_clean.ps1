Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

# Behance 3D icon: x=48, y=428, w=54, h=52
$bBmp = New-Object System.Drawing.Bitmap(54, 52, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bBmp)
$g.DrawImage($src, 0, 0, (New-Object System.Drawing.Rectangle(48, 428, 54, 52)), [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

for ($x = 0; $x -lt 54; $x++) {
  for ($y = 0; $y -lt 52; $y++) {
    $c = $bBmp.GetPixel($x, $y)
    $diff = [Math]::Abs($c.R - 252) + [Math]::Abs($c.G - 248) + [Math]::Abs($c.B - 245)
    if ($diff -le 5) {
      $bBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    }
  }
}
$bBmp.Save("c:\Users\nilak\projects\portfolio-nilu\src\assets\icon-behance-3d.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bBmp.Dispose()

# LinkedIn 3D icon: x=308, y=428, w=54, h=52
$lBmp = New-Object System.Drawing.Bitmap(54, 52, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($lBmp)
$g.DrawImage($src, 0, 0, (New-Object System.Drawing.Rectangle(308, 428, 54, 52)), [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

for ($x = 0; $x -lt 54; $x++) {
  for ($y = 0; $y -lt 52; $y++) {
    $c = $lBmp.GetPixel($x, $y)
    $diff = [Math]::Abs($c.R - 252) + [Math]::Abs($c.G - 248) + [Math]::Abs($c.B - 245)
    if ($diff -le 5) {
      $lBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    }
  }
}
$lBmp.Save("c:\Users\nilak\projects\portfolio-nilu\src\assets\icon-linkedin-3d.png", [System.Drawing.Imaging.ImageFormat]::Png)
$lBmp.Dispose()

$bmp.Dispose()
$src.Dispose()

Write-Host "Icons cleanly re-extracted!"
