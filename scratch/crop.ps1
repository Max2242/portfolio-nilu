Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\nilak\.gemini\antigravity-ide\brain\d1e21eb4-6ec3-46f4-9dfd-5dd86eeae5f8\.user_uploaded\media_1789756911093.png"
$src = [System.Drawing.Image]::FromFile($srcPath)

Write-Host "Source Dimensions: $($src.Width) x $($src.Height)"

# Crop right side image (Nilakshi on grass with squares)
# From the screenshot, the right side starts roughly around x=580 to 1024, y=0 to 622
# Let's inspect the background color and boundaries
$cropX = 570
$cropY = 0
$cropW = $src.Width - $cropX
$cropH = $src.Height

$cropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$bmp = New-Object System.Drawing.Bitmap($cropW, $cropH)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($src, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$outPath = "c:\Users\nilak\projects\portfolio-nilu\src\assets\nilakshi-about.png"
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$src.Dispose()

Write-Host "Cropped image saved to $outPath"
