# 4.5.6.9 Data compression

## Lesson Notes
Compression is a useful tool to reduce file sizes. This allows some types of data, such as video and audio data, to be stored using less space with the same quality. This means that these videos and songs will be loaded more quickly, and take up less bandwidth. Compressed file formats include MP3 and MP4 for audio and video.

However, video (and image) compression can also introduce artefacts. Videos allow inter-frame compression (delta encoding), as the changes between frames are smaller than storing the entire frame.

There are many different codecs and compression algorithms used to compress and decompress files. Codecs are programs that encode and decode files. Compression codecs are codecs that reduce file size.

## Specification

### 4.5.6.9 Data compression

#### Why are images and sound files compressed?
- Quicker to load files
- Takes up less storage space (on computers and servers)
- Reduces congestion on the internet due to smaller file sizes
- Makes audio and video files suitable for streaming, rather than requiring a full download
- Allows them to be sent via email

Other files, such as text files, are also compressible. The more random data is, the more difficult it is to compress.

#### Lossless and lossy compression
Lossy compression removes data, whereas lossless compression is symmetric, and does not lose data in the compression.

##### Lossless compression
As the file is compressed, quality is not lost. This means that data can be stored and transferred more efficiently with no changes to the data itself. This is often done using a dictionary or run length encoding.

Examples of this are FLAC and PNG. 

##### Lossy compression
Data is permanently removed. Once the data has been compressed, the original data cannot be retrieved from the compressed data. For “noisy” types of data (e.g. photos) this allows it to be stored more efficiently as the noise is compressed out and is reintroduced when it is uncompressed.

One problem with this is that every time you save the file, you lose more data.

Examples of this are MP3 and JPEG, for audio and photos.

##### Audio compression
This is done similarly to image compression. The WAV format is an uncompressed format for audio, which can be compressed with formats like the MP3 format. This reduces the file size from about 30 MB to 3 MB due to the compression. This is often not noticeable to the human ear, so there is little loss in quality.

##### Digital video compression
This has to compress audio and image data. It is made of static images displayed at a certain rate, similar to a sample rate for audio. This is called the framerate, which can be reduced. Videos also have a bit rate that accounts for all the audio and image data processed every second.

#### Run Length Encoding (RLE)
Continuous run lengths of similar pixel colours can easily be compressed, as they can be stored as a code stating how many repeats of each value there are.

#### Dictionary encoding
A case-sensitive dictionary stores words that are repeated in the data. This allows dictionary entries to be used to represent words in the data, reducing the file size. This is useful if larger sections of data are repeated within the data, such as repeating patterns in images.