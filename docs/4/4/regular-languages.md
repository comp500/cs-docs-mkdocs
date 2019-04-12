# 4.4.2 Regular languages

## Specification

### 4.4.2.1 Finite state machines (FSMs) with and without output


### 4.4.2.2 Maths for regular expressions
#### Sets
Sets are unordered collections of values where each value only occurs once. Sets can be defined by listing their members, for example: 

\`X = {1, 2, 3, 4, 5, 6, 23, 11, 7, 127}\`

Where X is the name of the set, and the numbers within the curly brackets are the numbers in the set.

Some common sets that are used are listed as follows:

- \`{}\` or \`O/\`, the empty set with no values
- \`NN\`, the infinite set of natural numbers, which are whole numbers used for counting (0, 1, 2, 3, 4, etc.)
- \`ZZ\`, the set of all integers, which are whole numbers and negative whole numbers (-2, -1, 0, 1, 2, etc.), which includes all of \`NN\`
- \`QQ\`, the set of all rational numbers, numbers that can be expressed as a fraction, which includes all of \`ZZ\`
- \`RR\`, the set of all real numbers, which includes irrational numbers such as \`pi\` or \`sqrt 2\` and all of \`QQ\`, but not imaginary numbers like \`oo\` or \`i\`

Some of these are also explained in section 4.5.1: [Number systems](../../5/number-systems/).

!!! note
    The set of all natural numbers, \`NN\`, is sometimes defined as not including the value 0. In the textbook, it is defined as including 0, so you should include it in answers to exam questions.

#### Types of sets
A *finite set* is a set whose elements can be counted using natural numbers up to a particular number, so it has a finite number of elements. An *infinite set* is a set with no end value, so it has an infinite number of elements.

The *cardinality* of a finite set is the number of elements it contains. The definition of cardinality for infinite sets is more complicated, and is not covered on this course.

For example:  
\`X = obrace({1, 2, 3, 4, 5})^("5 elements")\` is a finite set, with a cardinality of 5.  
\`Y = {1, 2, 3, 4, 5, ...}\` is an infinite set.

*Countable sets* are sets that can be counted using natural numbers, so that each element (or value) of the set is associated with a unique natural number. This includes finite sets and countably infinite sets.

*Countably infinite sets* are infinite sets that are also countable sets, so that each element of the infinite set is associated with a unique natural number. Even though the counting may never finish, it can still be counted as long as you want to count for. An example of this is \`NN\`, the set of natural numbers, as it can be counted with natural numbers.

The following table demonstrates the concept of countably infinite sets, for the set of [nonnegative even numbers](https://oeis.org/A005843). Even though there is no limit on the number of elements, the elements can still be counted using natural numbers:

Element Number | Element Value
--- | ---
0 | 0
1 | 2
2 | 4
3 | 6
4 | 8
5 | 10
n | 2n

An example of an infinite set that is not countable is \`RR\`, as there are infinitely many values between any two values (e.g. 1.5 is between 1 and 2), and there is no way of knowing the next value in the set from the previous value.

#### Set comprehension
Sets can be defined by listing the values in the set. However, some sets are time-consuming or impossible to define in this manner. *Set comprehension* (sometimes called *set building*) is a method for defining sets by defining the properties of the set, rather than the values in the set.

For example, \`A = { x | x in NN ^^ x < 5}\` defines a set A with the values 0, 1, 2, 3, 4. This is shown as follows:

- \`A =\` defines the name of the set as A.
- The curly brackets \`{ ... }\` represent the contents of the set.
- The statement \`x |\` states that the equation after the \`|\` (the pipe symbol, meaning 'such that') is defined in terms of \`x\`; the values of the set are represented by \`x\` in the equation.
- \`x in NN\` states that the values of A, \`x\`, are contained in (are members of) the set of all natural numbers; so all the values of A are natural numbers.
- The \`^^\` symbol means 'and'.
- \`x < 5\` states that all the values of A are less than 5.

In words, the set A contains all natural numbers less than five.

!!! note
	The \`nn\` symbol is commonly used in A Level Maths to mean a logical 'and' (\`\^\^\`). The \`\^\^\` symbol applies to the definitions of *properties* of sets, while \`nn\` (intersection) applies to sets themselves. For example, \`A nn B\` or \`x > 2 ^^ x < 5\`. The operation \`A ^^ B\` is not defined.

<!-- TODO: finish https://youtu.be/XfKOIWi420s?t=384 -->

### 4.4.2.3 Regular expressions


### 4.4.2.4 Regular language