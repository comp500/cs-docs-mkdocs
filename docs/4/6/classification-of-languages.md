# 4.6.2 Classification of programming languages

## Lesson Notes
### Alternative interpretation of "Generation"
|Generation|Example|Usage|
|---|---|---|
|1|Machine code|Used directly by the processor|
|2|Assembly language|Assembled into machine code|
|3|C, Go, C++, FORTRAN etc.|Compiled into assembly language|
|4|JS, Java (sort of), Python etc.|Interpreted|

Java (sort of) refers to that fact that bytecode is produced from Java code, as a .class, which is then executed (interpreted?) by the Java Virtual Machine (JVM). This odd execution strategy allows you to Write Once, Run Anywhere™.

## Specification

### 4.6.2.1 Classification of programming languages
Programming of computers requires a code in order for the computer to understand and execute it. These are classified into low and high level languages, with "Generation" numbers to indicate how low level the language is. This is due to the progressive development of computers, allowing higher level languages to be created based on lower level languages.

|Generation|Example|Usage|Code Style|"Level"
|---|---|---|---|---|
|1|Machine code|Used directly by the processor|Direct (imperative)|Low|
|2|Assembly language|Assembled into machine code|Direct (imperative)|Low|
|3|C, Go, JS, etc.|Interpreted or compiled into assembly language|Imperative|High|
|4|CSS, SQL, etc.|Interpreted|Declarative|High|

The lowest level of language is machine code, where the computer reads each bit and operates on it. This was also the first language for computers created, and is therefore the hardest to understand, as it is in binary.

To make this programming easier to do, assembly language was created. This is a textual representation of the machine code, and has a 1-to-1 mapping with machine code, so that each assembly instruction represents a machine code instruction, with a width of the word size of the computer. This language is assembled (by an assembler) into machine code, for usage by the computer.

This assembly language was still quite hard to understand, as a large majority of operations are just moving memory around, and adding numbers together. High-level languages were created to combat this problem. They do not handle instructions directly, but they are compiled (by a compiler) into assembly language and then into machine code (some compilers go straight into machine code). Some high-level languages are interpreted rather than being compiled, and this is discussed in section 4.6.3: [Types of program translator](../types-of-translator).

#### Declarative vs Imperative
Imperative programming, used in most high level languages, is where you state exactly *how* to execute the instructions you give to it. Declarative programming, however, is where you state *what* should be done as a result of the instructions, not *how* they should be done. The *how* of declarative language is decided by the interpreter.

#### Machine code / Assembly language vs High level languages
|Level|Advantages|Disadvantages|
|---|---|---|
|Low|Very fast, as you state the exact instructions|Hard to write, as it is abstract|
|Low|Doesn't need a translator|Hard to get source for code given|
|Low||Hard to debug, assembly requires translation|
|High|Simpler and easier to write than low level languages, not abstract|Relatively slow to execute|
|High|Easy to debug||
|High|Uses English words to describe execution||
|Interpreted (not on spec)|Easy to write, interpreter does the work for you|Very slow to execute|

#### "Imperative high-level language"
A high level language, where you state exactly *how* to execute the instructions you give to it. For example, I could tell the computer to:

- Create a variable i with value *0*
- Check that i is less than *2*
- Print "Hello i" (Hello 0)
- Increment i by *1*
- Check that i is less than *2*
- Print "Hello i" (Hello 1)
- Increment i by *1*
- Check that i is less than *2* (it is not, so we exit)

Instead of:

- Print "Hello i" where *0* <= i < *2*, incrementing by *1* every time, starting from *0*

Imperative high-level languages are usually translated directly into machine code, as they are simply a better way of explaining the same concepts introduced by assembly/machine code.