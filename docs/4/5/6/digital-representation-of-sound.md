# 4.5.6.7 Digital Representation of Sound

## Lesson Notes

### Digital Audio Key Words

Sample Frequency (rate)|Sample Resolution (bit depth)|Bit Rate
---|---|---
The number of audio samples captured every second.|The number of bits available for each sample.|The number of bits used per second of audio.


These three factors affect the quality of (and storage space required for) digital audio.

## Specification

### 4.5.6.7 Digital representation of sound
Sound is an oscillation of pressure transmitted through particles. Vibration forms waves which spread out, colliding with the eardrum. This allows it to be heard by the human body. Smaller distances between waves (higher frequency) has higher pitch. Volume is the amount of movement that the wave does.

Stereo audio is produced individually for each ear, to allow more realistic and directional sound to be heard.

Microphones convert the oscillations of sound into an analog electrical signal. Samples are then taken of this signal, to make a digital signal that can be stored and edited on a computer. 

The Nyquist Theorem states that the sample rate should be at a frequency which is at least twice the value of the highest frequency in the sampled signal.
This is because waves oscillate, so to get the entire range of values that the wave occupies, samples must be taken at the high and low points of the wave.
The full range of human hearing is between 20 Hz and 20 kHz, so a sampling rate of 40 kHz is useful. The CD (Compact Disc) format uses 44.1 kHz for this and other technical reasons. This is the most common sampling rate, however for voice this may be much lower, often 8 kHz.

The sampling resolution (bit depth) and sample rate are chosen as a compromise between quality and file size. The MP3 format (and other formats, such as Ogg Vorbis, FLAC, Opus etc.) is also used to compress this audio, so less space is used. CDs usually use 16 bits for the sampling resolution. This allows 65,536 possible values at each sample to store audio.

#### Sound sample sizes
To calculate file size of a sound file, we use the following formulas:

\`text(Frequency) xx text(Bit depth) xx text(Number of Channels) = text(Bit rate)\`

E.g. for standard audio,
\`44100 \*\* 16 \*\* 2 = text(1,411,200 bps (1,411.2 kbps))\`

\`((text(Bit rate) xx text(Length in seconds)) div 8) div 1000 = text(File size in KB)\`
\`((text(Bit rate) xx text(Length in seconds)) div 8) div 1000000 = text(File size in MB)\`

A four minute song at this rate would have a file size of:
\`{:
(text(1,411,200) xx 240 = text(338688000 bits)),
(div 8 = text(42336000 bytes)),
(div 1000000 = text(42.336 MB))
:}\`