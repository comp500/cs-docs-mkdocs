# 4.5.1 Number systems

## Specification

## 4.5.1.1 Natural Numbers
Natural numbers are whole numbers used for counting. (0, 1, 2, 3, 4, etc.) There are infinitely many of them, as you can just add 1 to get another natural number. These are defined as a set of numbers, as follows:

\`NN = {0, 1, 2, 3, ...}\`

This set is sometimes defined as not including the value 0, especially in Maths. In the textbook, it is defined as including 0, so you should include it in answers to exam questions.

When stored in computer programs, they are often called unsigned integers, as they do not have sign bits.

## 4.5.1.2 Integer Numbers
Integers are whole numbers like natural numbers, but also include negative numbers. Negative values are indicated by the minus sign.

Integers are very commonly used in computer programs, and are often called signed integers. They are stored with a sign bit and [Two's Complement](../binary-number-system/#4543-signed-binary-using-twos-complement).

Integers are also defined as a set of numbers, as follows:

\`ZZ = {..., -3, -2, -1, 0, 1, 2, 3, ...}\`

## 4.5.1.3 Rational Numbers
A rational number is a number which can be represented as a fraction of integers.

As a set, this is represented by \`QQ\`. This set also includes all of \`ZZ\`.

Number           | Rational? | Why
---------------- | --------- | ----------
\`pi\`      | No        | \`pi\` cannot be written as a fraction
\`sqrt{2}\`  | No        | \`sqrt{2}\` cannot be written as a fraction
\`7\`          | Yes       | 7 can be written as \`7over1\`. All integer numbers are therefore also rational numbers
\`sqrt{-1}\` | No        | \`sqrt{-1} = i\`, and complex numbers cannot be written with integers.

## 4.5.1.5 Real Numbers
Real numbers are numbers which can be represented as an integer number, a rational or an irrational number.

One may consider a real number as a "real world quantity".
This set of numbers is represented as \`RR\`.

Number           | Real? | Why
---------------- | --------- | ----------
\`pi\`       | Yes       | \`pi\` can be found in the real world. Tasty.
\`sqrt{2}\`  | Yes       | It is possible to cut a length \`sqrt{2}\`.
\`7\`          | Yes       | You can count seven objects.
\`sqrt{-1}\` | No        | You cannot count a complex number.

## 4.5.1.6 Ordinal Numbers
An ordinal number is a number that can be used to describe a position within a set.

In the set \`S = {"a", "b", "c", "d"}\`, "a" would be the 1st letter in the one indexed set.

Cardinal numbers are numbers that describe the length of a set, often used with ordinal numbers. For the example set \`S\`, "b" is second (the ordinal number) out of 4 (the cardinal number).

## 4.5.1.7 Counting and measurement
Natural numbers are for counting. Real numbers can be used for measurement.