Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile('C:\Users\nilak\.gemini\antigravity-ide\brain\59fd86a3-c7b7-4b3d-935b-b433b7f1a974\.user_uploaded\media_1790180879430.png')

$cardColor = [System.Drawing.Color]::FromArgb(216, 216, 216)

# Exact horizontal bounds of the card at y=450
$cardLeft = 0; $cardRight = 0
for ($x = 0; $x -lt $bmp.Width; $x++) {
    $p = $bmp.GetPixel($x, 450)
    if ([Math]::Abs($p.R - 216) -lt 5 -and [Math]::Abs($p.G - 216) -lt 5 -and [Math]::Abs($p.B - 216) -lt 5) {
        $cardLeft = $x
        break
    }
}
for ($x = $bmp.Width - 1; $x -ge 0; $x--) {
    $p = $bmp.GetPixel($x, 450)
    if ([Math]::Abs($p.R - 216) -lt 5 -and [Math]::Abs($p.G - 216) -lt 5 -and [Math]::Abs($p.B - 216) -lt 5) {
        $cardRight = $x
        break
    }
}

# Exact vertical bounds of the card at x=250
$cardTop = 0; $cardBottom = 0
for ($y = 0; $y -lt $bmp.Height; $y++) {
    $p = $bmp.GetPixel(250, $y)
    if ([Math]::Abs($p.R - 216) -lt 5 -and [Math]::Abs($p.G - 216) -lt 5 -and [Math]::Abs($p.B - 216) -lt 5) {
        $cardTop = $y
        break
    }
}
for ($y = $bmp.Height - 1; $y -ge 0; $y--) {
    $p = $bmp.GetPixel(250, $y)
    if ([Math]::Abs($p.R - 216) -lt 5 -and [Math]::Abs($p.G - 216) -lt 5 -and [Math]::Abs($p.B - 216) -lt 5) {
        $cardBottom = $y
        break
    }
}

Write-Host "Card: Left=$cardLeft, Right=$cardRight, Top=$cardTop, Bottom=$cardBottom"
Write-Host "Card Dimensions: Width=$($cardRight - $cardLeft + 1), Height=$($cardBottom - $cardTop + 1)"

# Now find the photo bounds
# At y=200, find where pixel is NOT #D8D8D8 and NOT the outer bg
$photoLeft = 0; $photoRight = 0
for ($x = $cardLeft; $x -le $cardRight; $x++) {
    $p = $bmp.GetPixel($x, 200)
    $isCard = ([Math]::Abs($p.R - 216) -lt 8 -and [Math]::Abs($p.G - 216) -lt 8 -and [Math]::Abs($p.B - 216) -lt 8)
    if (-not $isCard) {
        $photoLeft = $x
        break
    }
}
for ($x = $cardRight; $x -ge $cardLeft; $x--) {
    $p = $bmp.GetPixel($x, 200)
    $isCard = ([Math]::Abs($p.R - 216) -lt 8 -and [Math]::Abs($p.G - 216) -lt 8 -and [Math]::Abs($p.B - 216) -lt 8)
    if (-not $isCard) {
        $photoRight = $x
        break
    }
}

# Photo Top and Bottom at x=450
$photoTop = 0; $photoBottom = 0
for ($y = $cardTop; $y -le $cardBottom; $y++) {
    $p = $bmp.GetPixel(450, $y)
    $isCard = ([Math]::Abs($p.R - 216) -lt 8 -and [Math]::Abs($p.G - 216) -lt 8 -and [Math]::Abs($p.B - 216) -lt 8)
    if (-not $isCard) {
        $photoTop = $y
        break
    }
}
for ($y = 350; $y -ge $cardTop; $y--) {
    $p = $bmp.GetPixel(450, $y)
    $isCard = ([Math]::Abs($p.R - 216) -lt 8 -and [Math]::Abs($p.G - 216) -lt 8 -and [Math]::Abs($p.B - 216) -lt 8)
    if (-not $isCard) {
        $photoBottom = $y
        break
    }
}

Write-Host "Photo: Left=$photoLeft, Right=$photoRight, Top=$photoTop, Bottom=$photoBottom"
Write-Host "Photo Dimensions: Width=$($photoRight - $photoLeft + 1), Height=$($photoBottom - $photoTop + 1)"
Write-Host "Card padding: Left=$($photoLeft - $cardLeft), Right=$($cardRight - $photoRight), Top=$($photoTop - $cardTop)"
Write-Host "Bottom text area height: $($cardBottom - $photoBottom)"

# Text color sample around (450, 360) and (450, 390)
Write-Host "Text color around title:"
$titleP = $bmp.GetPixel(450, 360)
Write-Host "Title pixel: R=$($titleP.R) G=$($titleP.G) B=$($titleP.B) (#$("{0:X2}{1:X2}{2:X2}" -f $titleP.R, $titleP.G, $titleP.B))"

$bmp.Dispose()
