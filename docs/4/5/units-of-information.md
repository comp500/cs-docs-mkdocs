# 4.5.3 Units of information

## Specification

### 4.5.3.1 Bits and bytes
A bit is the fundamental unit of information, and cannot be broken down (unless you use a quantum computer). It has two states: 1 or 0, on or off, true or false.

Bits are commonly grouped into bytes, which are sequences of 8 bits. These are used as they can represent a useful range of values, 0 to 255. The UTF-8 character format usually uses a single byte per character, allowing many characters to be stored and transferred efficiently.

To represent \`2^n\` values in Binary, \`n\` bits are needed. For example, 3 bits can represent 8 (equal to 2^3^) different values.

The following are standard small units of data transferred within a computer:

|Unit|Quantity|
|---|---|
|Bit|1 or 0|
|Nibble (or nybble)|4 bits|
|Byte|8 bits|
|Word|16 bits|
|DWord (double word)|32 bits|
|QWord (quad word)|64 bits|

The unit of *word* may also refer to the bus width within a computer (e.g. 32 bit, 64 bit) and therefore changes depending on the processor being used.

### 4.5.3.2 Units
Larger units are represented using prefixes. These prefixes multiply the value of the unit, so that less space is needed to write the number. In computer systems, the main unit is the byte, although bits are often used as well. "B" is used to represent bytes and "b" is used to represent bits.

The most commonly used prefixes are:

Denary Prefix|Value|Binary Prefix|Value
---|---|---|---
Kilo|10^3^|Kibi|2^10^
Mega|10^6^|Mibi|2^20^
Giga|10^9^|Gibi|2^30^
Tera|10^12^|Tebi|2^40^


#### Denary units and Binary units
Denary units and binary units are both used in computer systems, using powers of 10 and 2:

Denary Unit|Value|Binary Unit|Value
---|---|---|---
Kilobyte|10^3^ B = 1000 B|Kibibyte|2^10^ B = 1024 B
Megabyte|10^6^ B = 1000 KB|Mibibyte|2^20^ B = 1024 KiB
Gigabyte|10^9^ B = 1000 MB|Gibibyte|2^30^ B = 1024 MiB
Terabyte|10^12^ B = 1000 GB|Tebibyte|2^40^ B = 1024 GiB

Kilobytes are a denary unit, using the multiplier 10^3^, or 1000. Kibibytes are **not** a denary unit, using  the multiplier 2^10^, or 1024. The discrepancy between kB and KB is due to the SI standard stating that *kilo* means thousand; however many computer-based counting uses powers of 2. Therefore, many historical uses of the word *kilobyte* and KB unit refer to the KiB unit (1024 bytes, officially kibibyte).

These units can also be represented using powers of 1000 and 1024, instead of 10 and 2:

Denary Unit|Value|Binary Unit|Value
---|---|---|---
Kilobyte|1000^1^ B = 1000 B|Kibibyte|1024^1^ B = 1024 B
Megabyte|1000^2^ B = 1000 KB|Mibibyte|1024^2^ B = 1024 KiB
Gigabyte|1000^3^ B = 1000 MB|Gibibyte|1024^3^ B = 1024 MiB
Terabyte|1000^4^ B = 1000 GB|Tebibyte|1024^4^ B = 1024 GiB

