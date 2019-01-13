# 4.5.6.6 Vector graphics versus bitmapped graphics

## Specification

### 4.5.6.6 Vector graphics versus bitmapped graphics
A vector graphic is made of mathematical instructions, to define the image. They are built up in layers, to decide which parts to draw over others. It is scalable, so it can be zoomed in without loss in quality as the mathematical instructions are recalculated.

A bitmap graphic uses square pixels to store image data. Each pixel can store 16 million colours, in RGB format. These pixels are put into an invisible grid to make up an image. The more pixels that are used, the better the quality of the image, and the better it looks when zoomed in. When you zoom in, there will be a point at which it will become distorted as the pixels are larger.

Vector graphics are considerably smaller in size than bitmap graphics, but they are harder to produce for complex images. Vector graphics also maintain the same quality if the image is resized. If you reduce the size of a vector drawing too much, thin lines may disappear. <!-- TODO uses of each? -->