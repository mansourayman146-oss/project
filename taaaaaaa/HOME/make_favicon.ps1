Add-Type -AssemblyName System.Drawing

$width = 256
$height = 256
$bitmap = New-Object System.Drawing.Bitmap $width, $height
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.Clear([System.Drawing.Color]::Transparent)

# Apply background color #0F3D3E matching your navbar
$bgColor = [System.Drawing.ColorTranslator]::FromHtml("#0F3D3E")
$bgBrush = New-Object System.Drawing.SolidBrush($bgColor)

# Define border radius proportion mirroring 10px on a 35px square (around 28.5%)
$radius = 73

# Construct Graphics Path for rounded corners
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddArc(0, 0, ($radius*2), ($radius*2), 180, 90)
$path.AddArc($width - ($radius*2), 0, ($radius*2), ($radius*2), 270, 90)
$path.AddArc($width - ($radius*2), $height - ($radius*2), ($radius*2), ($radius*2), 0, 90)
$path.AddArc(0, $height - ($radius*2), ($radius*2), ($radius*2), 90, 90)
$path.CloseFigure()

$graphics.FillPath($bgBrush, $path)

# Load existing 'doctor.png'
$srcImg = [System.Drawing.Image]::FromFile((Join-Path $PWD "doctor.png"))

# Draw the image in the center, giving it 10% padding
$padding = 32
$imgWidth = $width - ($padding * 2)
$imgHeight = $height - ($padding * 2)

$graphics.DrawImage($srcImg, $padding, $padding, $imgWidth, $imgHeight)

# Save the new favicon.png over the old one
$bitmap.Save((Join-Path $PWD "favicon.png"), [System.Drawing.Imaging.ImageFormat]::Png)

$graphics.Dispose()
$bgBrush.Dispose()
$srcImg.Dispose()
$bitmap.Dispose()
$path.Dispose()

Write-Output "Successfully updated favicon.png with border-radius!"
