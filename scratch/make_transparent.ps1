Add-Type -AssemblyName System.Drawing

$path = 'C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png'
$src = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($src)

$cropX = 570
$cropY = 6
$cropW = 1020 - $cropX
$cropH = 618 - $cropY

$outBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Background color in screenshot
$bgR = 252; $bgG = 248; $bgB = 245

for ($x = 0; $x -lt $cropW; $x++) {
  for ($y = 0; $y -lt $cropH; $y++) {
    $c = $bmp.GetPixel($cropX + $x, $cropY + $y)
    $diff = [Math]::Abs($c.R - $bgR) + [Math]::Abs($c.G - $bgG) + [Math]::Abs($c.B - $bgB)
    
    # If it's the exact solid background color (and not part of the white sticker/squares)
    # The white sticker and white squares are pure white (255, 255, 255)
    if ($diff -le 6) {
      $outBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    } else {
      $outBmp.SetPixel($x, $y, $c)
    }
  }
}

$outPath = 'c:\Users\nilak\projects\portfolio-nilu\src\assets\nilakshi-about.png'
$outBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

$outBmp.Dispose()
$bmp.Dispose()
$src.Dispose()

Write-Host "Created transparent artwork PNG: $outPath"
