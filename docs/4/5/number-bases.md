# 4.5.2 Number bases

## Lesson Notes

### Binary Recap
Binary is used in computers as it is easy to differentiate between the two states. This reduces the probability of errors due to signal loss, and it is also easy to create logic circuits that use two (*bi* nary) states for calculation.

## Specification

### 4.5.2.1 Number base
The *base* of a number is the number of characters used to the represent that number. For example, Denary (the most common number system) uses 10 different characters to represent numbers, which are 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9. Combinations of these characters are used to represent larger numbers.

Common number bases include:

- Binary (base 2), e.g. 01110101 00101010 01010010
- Octal (base 8), e.g. 35 225 122 *(not needed for A Level)*
- Denary (base 10), e.g. 7,678,546
- Hexadecimal (base 16), e.g. 75 2A 52
- Base 64, e.g. 4qmS *(not needed for A Level)*

These are often expressed using a subscript, e.g. 82~10~ or ‭01010010‬~2~.

#### Base conversions

##### Conversion between Binary and Denary
Denary 19 is equal to 00010011 in binary, as follows:

|2^7^|2^6^|2^5^|2^4^|2^3^|2^2^|2^1^|2^0^|
|---|---|---|---|---|---|---|---|
|128|64|32|16|8|4|2|1|
|0|0|0|1|0|0|1|1|

Binary 01100100 is equal to 100 in denary, as follows:

|2^7^|2^6^|2^5^|2^4^|2^3^|2^2^|2^1^|2^0^|
|---|---|---|---|---|---|---|---|
|128|64|32|16|8|4|2|1|
|0|1|1|0|0|1|0|0|

\`64 + 32 + 4 = 100\`

##### Conversion between Binary and Hexadecimal
Conversion between Binary and Hexadecimal is very easy, as one character in Hexadecimal represents a nibble (4 bits) in Binary.

For example, 0110 0110~2~ is equal to 66~16~. The characters of Hexadecimal are very similar to Denary, but add the letters A to F, to represent 10 to 15:

|Hex character|Binary value|Denary value|
|---|---|---|
|0|0000|0|
|1|0001|1|
|2|0010|2|
|3|0011|3|
|4|0100|4|
|5|0101|5|
|6|0110|6|
|7|0111|7|
|8|1000|8|
|9|1001|9|
|A|1010|10|
|B|1011|11|
|C|1100|12|
|D|1101|13|
|E|1110|14|
|F|1111|15|

#### Uses of Hexadecimal
Hexadecimal (often abbreviated as Hex) is very useful for computer systems and programming. This is because one hex character represents a nibble in binary, so two hex characters can be used to represent a byte, allowing for efficient viewing of binary data without complicated conversion.

Hex editors take advantage of this characteristic to allow editing and viewing of binary data, without taking up too much screen space. It is also easier to read and communicate letters and numbers than 0 and 1 values.