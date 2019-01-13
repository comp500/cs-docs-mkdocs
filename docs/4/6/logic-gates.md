# 4.6.4 Logic gates

<!-- TODO: Circuit diagrams, Venn diagrams -->

## Lesson Notes
CPUs (Central Processing Units) are made up of billions of transistors. These transistors are arranged in an order to complete calculations.

To complete these calculations, a series of binary instructions are put through logic gates made from combinations of transistors. Typically, 4 transistors are used per logic gate, which can be combined in a specific order to create logic circuits. These logic circuits can be represented in a logic diagram.

Logic gates work on boolean operations, so they only work with two values: 1 or 0. This simplifies circuit design and reduces problems with signal loss in a system. In logic circuits, booleans are represented (usually) by a 1 or a 0, however in programming this is represented by the names true and false. In the physical circuit the booleans are represented by a high (depends on the logic level of the processor) or a low (usually 0V) voltage through the gates.

## Specification

### 4.6.4.1 Logic gates

#### Truth tables and introduction to gates

##### What are truth tables?
Truth tables allow us to represent every possible state of a logic circuit, by evaluating every possible input to each gate in the circuit individually. The tables have 1 or more inputs labeled alphabetically (e.g. A, B, C) and usually one output labelled Q. 

These tables allow us to easily deduce outputs to circuits, which allows us to simplify them. Simplification of circuits means that there is more space on the processor, which allows more gates to be fit in and therefore increase the amount of processing that can be done.

!!! note
    The XNOR gate exists, but is not on our syllabus.

##### NOT gate (1 input)

Produces the opposite (inversion, or complement) of the input. Can only have one input.

\`Q = bar A\` or \`Q = not A\`

A | Q
--- | ---
0 | 1
1 | 0

##### AND gate (2+ inputs)

The output is only on if all inputs are on.

\`Q = A * B\`

A | B | Q
--- | --- | ---
0 | 0 | 0
0 | 1 | 0
1 | 0 | 0
1 | 1 | 1

##### OR gate (2+ inputs)

The output is on if any of the inputs are on.

\`Q = A + B\`

A | B | Q
--- | --- | ---
0 | 0 | 0
0 | 1 | 1
1 | 0 | 1
1 | 1 | 1

##### XOR gate (2+ inputs)

The output is on if either of the inputs are on, but not both.

\`Q = A o+ B\`

A | B | Q
--- | --- | ---
0 | 0 | 0
0 | 1 | 1
1 | 0 | 1
1 | 1 | 0

##### NAND gate (2+ inputs)

A combination of an AND gate and a NOT gate. The inversion of an AND operation; only off if both inputs are on.

\`Q = bar(A * B)\`

A | B | Q
--- | --- | ---
0 | 0 | 1
0 | 1 | 1
1 | 0 | 1
1 | 1 | 0

##### NOR gate (2+ inputs)

A combination of an OR gate and a NOT gate. The inversion of an OR operation; only on if both inputs are off.

\`Q = bar(A + B)\`

A | B | Q
--- | --- | ---
0 | 0 | 1
0 | 1 | 0
1 | 0 | 0
1 | 1 | 0

<!--### Logic gate circuit diagrams

// TODO: Complete when logic circuit library is made

### Logic gate circuit truth table

// TODO: Complete when logic circuit library is made

### Boolean expression for a logic circuit

// TODO: Complete when logic circuit library is made

### Logic gate circuit for a boolean expression

// TODO: Complete when logic circuit library is made-->

#### Half adder and Full adder logic

##### Adding binary numbers

Adding binary numbers is very similar to adding denary numbers:

\`
{:
(\ \ \ \ 011\ (3)),
(+100\ (4)),
(bar(\ \ \ \ 111)\ (7))
:}
\`

To add two numbers in the same column, you carry across:

\`
{:
(\ \ \ \ 0\ 0\ \ 10),
(+0_1 1_1 11),
(bar(\ \ \ \ 1\ 0\ \ 01))
:}
\`

##### Introduction to Half/Full adders

A half adder calculates the sum of two bits, and outputs a carry bit. This is calculated as follows:

\`Sum = A o+ B\`

\`Carry = A * B\`

Two half adders put together make a full adder, which can take a carry input, so that they can be chained together to calculate larger numbers.

<!--### Half adder circuit

// TODO: Add a diagram here

### Edge-triggered D-type flip-flop

// I don't know if we did this?-->