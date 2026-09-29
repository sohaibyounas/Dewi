Add-Type -AssemblyName System.Drawing

$size = 128
$bmp = New-Object System.Drawing.Bitmap $size, $size
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Background rounded rectangle
$rect = New-Object System.Drawing.Rectangle 0, 0, $size, $size
$c1 = [System.Drawing.ColorTranslator]::FromHtml('#ff6e00')
$c2 = [System.Drawing.ColorTranslator]::FromHtml('#d62800')
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, $c1, $c2, 50.0

$radius = 32
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddArc(2, 2, $radius, $radius, 180, 90)
$path.AddArc($size - $radius - 3, 2, $radius, $radius, 270, 90)
$path.AddArc($size - $radius - 3, $size - $radius - 3, $radius, $radius, 0, 90)
$path.AddArc(2, $size - $radius - 3, $radius, $radius, 90, 90)
$path.CloseFigure()

$g.FillPath($brush, $path)

# Subtle highlight border
$pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(60, 255, 255, 255)), 2
$g.DrawPath($pen, $path)

# Text "Dewi"
$fontFamily = New-Object System.Drawing.FontFamily "Segoe UI"
$font = New-Object System.Drawing.Font $fontFamily, 36, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel
$textBrush = [System.Drawing.Brushes]::White
$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center

# Slight text shadow
$shadowBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(70, 0, 0, 0))
$shadowRect = New-Object System.Drawing.RectangleF 0, 2, $size, $size
$g.DrawString("Dewi", $font, $shadowBrush, $shadowRect, $sf)

# Front text
$textRect = New-Object System.Drawing.RectangleF 0, 0, $size, $size
$g.DrawString("Dewi", $font, $textBrush, $textRect, $sf)

$targetPath = Join-Path $PSScriptRoot "favicon.png"
$bmp.Save($targetPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
Write-Output "Favicon saved to $targetPath"
