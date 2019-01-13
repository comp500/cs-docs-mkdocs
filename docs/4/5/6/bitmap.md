# 4.5.6.4 Bitmapped graphics

## Specification

### 4.5.6.4 Bitmapped graphics
Bitmaps are produced from cameras and scanners, and can also be drawn with software like Paint or GIMP. Bitmaps are made of an invisible grid of square pixels. The pixels are placed together to create a continuous tone, and the number of pixels per square inch (ppi) defines the resolution. These are not losslessly scalable, so that if you enlarge them, the quality will decrease. This means they are lossy in the sense that enlarging them reduces the quality, which is different from compression lossiness (e.g. from JPEG).

The colour of each individual dot can be changed, so it can easily be manipulated and modified to suit any purpose. They are a common format, so they are widely supported and used. However, they reduce in quality when they are made bigger, causing problems for large media. They also use a lot of storage space, compared to vector images. The greater the resolution and colour depth, the larger they are on disk.

There are several file formats for storing bitmaps. Some of these include BMP, GIF, JPEG, TIFF, PNG and WebP. JPEG is a lossy compression format, which means that data is lost when it is stored, but it uses significantly less space. PNG is a lossless compression format designed for simple images, which does not lose data when it is stored.

#### RGB colour system
An additive colour system, to make all colours from 0-255 red, green and blue. This means there is 256^3^ (16 million) colours available, using 1 byte for each colour. The alpha channel can also be used, for transparency. This is mostly used in PNG files for computer generated images.

#### Greyscale colour system
Just one colour with no changes in hue, usually occupying the values 0-255. This usually represents shades of black, white and grey, hence the name greyscale.

#### Pixels and Bit depth
Pixels are made up of bits. The greater the bit depth, the more colours are available in the palette for the pixel, which creates a more realistic tone and colour accuracy. However, increasing the bit depth also increases the file size. Bit depth is the number of bits used to represent a pixel.

The number of pixels we have is known as the resolution. When an image is placed on a screen, we can also calculate the pixel density, measured in ppi (pixels per inch). When it is printed, we can also calculate the printing resolution, measured in dpi (dots per inch).

Bits per Pixel (bpp) | Number of Colours Available | Common Name(s)
---|---|---
1|2|Monochrome
2|4|CGA
4|16|EGA
8|256|Super VGA, 8-bit colour
16|65536|High colour
24|16777216|True colour

The most common bit depth used for computer systems is True colour, which uses 24 bits, with 8 bits for each colour. This is used by almost every modern computer system and storage format.

#### Metadata
Stores data needed to present the image properly. This includes height, width, colour depth and resolution. It can also include data such as time and date of the image, and EXIF data. Some cameras, such as smart phones, also record GPS coordinates of the photo location, which can then be used to locate the photo on a map.

##### EXIF data
EXIF data is recorded at the point of capture, such as the model of camera, aperture settings etc. This is part of the JPEG format, and several other image formats, to store this metadata so that it can be used by the photographer. Some cameras even store geographic coordinates, to allow mapping of photographs.

#### Image Size and Metadata
The resolution is the number of pixels per inch, known as dots per inch (dpi) in printed material.
The computer needs more information than just the image data, such as colour depth, width, and height. This is stored in the metadata.

\`text(Image Size in Bytes) = ((text(Width) xx text(Height) xx text(Bit Depth)) / 8) + text(Metadata)\`