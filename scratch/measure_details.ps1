Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile('C:\Users\nilak\.gemini\antigravity-ide\brain\59fd86a3-c7b7-4b3d-935b-b433b7f1a974\.user_uploaded\media_1790180879430.png')

# Find darkest pixel around title (x=330 to 550, y=340 to 380)
$minLum = 1000; $darkestP = $null
for ($y = 340; $y -lt 380; $y++) {
    for ($x = 330; $x -lt 550; $x++) {
        $p = $bmp.GetPixel($x, $y)
        $lum = $p.R + $p.G + $p.B
        if ($lum -lt $minLum) {
            $minLum = $lum
            $darkestP = $p
        }
    }
}
Write-Host "Title darkest pixel: R=$($darkestP.R) G=$($darkestP.G) B=$($darkestP.B) (#$("{0:X2}{1:X2}{2:X2}" -f $darkestP.R, $darkestP.G, $darkestP.B))"

# Find darkest pixel around subtitle (x=330 to 550, y=380 to 420)
$minLum = 1000; $darkestSub = $null
for ($y = 380; $y -lt 420; $y++) {
    for ($x = 330; $x -lt 550; $x++) {
        $p = $bmp.GetPixel($x, $y)
        $lum = $p.R + $p.G + $p.B
        if ($lum -lt $minLum) {
            $minLum = $lum
            $darkestSub = $p
        }
    }
}
Write-Host "Subtitle darkest pixel: R=$($darkestSub.R) G=$($darkestSub.G) B=$($darkestSub.B) (#$("{0:X2}{1:X2}{2:X2}" -f $darkestSub.R, $darkestSub.G, $darkestSub.B))"

# Check corner radius of card:
# Top edge is straight from where to where?
# Left edge is straight from where to where?
# Top-left corner is around x=185, y=34
# Let's find first point where top edge (y=34) has card color
for ($x = 185; $x -lt 300; $x++) {
    $p = $bmp.GetPixel($x, 34)
    if ([Math]::Abs($p.R - 216) -lt 8) {
        Write-Host "Card top flat edge starts at x=$x (radius ~ $($x - 185))"
        break
    }
}

# Photo top-left corner
for ($x = 204; $x -lt 300; $x++) {
    $p = $bmp.GetPixel($x, 71)
    if ([Math]::Abs($p.R - 216) -gt 20) {
        Write-Host "Photo top flat edge starts at x=$x (radius ~ $($x - 204))"
        break
    }
}

$bmp.Dispose()
