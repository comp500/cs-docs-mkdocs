# 4.6.3 Types of program translator

## Specification

### 4.6.3.1 Types of program translator
|Name|Role|
|---|---|
|Assembler|Turns assembly language into machine code, for execution by the processor|
|Compiler|Turns high-level languages into assembly or machine code, to be assembled (and linked?) into machine code|
|Interpreter|Steps through given code, executing the code by manually running instructions based on the code|

#### Compilation vs Interpretation
Compilation and Interpretation are ways of executing high-level languages. These languages cannot be understood directly by the processor, as they are too complicated, and there is a 1-to-many relationship with high-level language and machine instructions.

Compilation translates the high-level language into machine code (sometimes into assembly or bytecode first). This allows the resulting machine code to be directly executed by the processor, resulting in fast execution. However, this can often take a while, as all of the code must be compiled at once.

Interpretation steps through the code, executing the code as it goes through it by executing instructions based on the code. This means that there is no large intermediate step between typing of code and execution of code. This allows small amounts of code to be executed quickly, and an interpreter is easier to make than a compiler. However, as each line of code must be interpreted as it steps through it, execution is significantly slower than with compilation.

As interpretation does not require a large step to compile the code, it is suitable for small snippets of code, for example in a REPL (Read Evaluate Print Loop) which executes code given by the user as it is typed. This allows responsiveness and easy debugging of programs. Compilation is suitable for large and performance-sensitive applications, but still useful for smaller applications as well. Compiled executables can only be run on the system for which they were produced, while interpreted code can be run on any system that the interpreter supports. This makes interpreted languages suitable for programs used in many environments, for example web pages.

#### Intermediate languages
Intermediate languages are produced by some compilers (e.g. Java, LLVM), that allow the code produced to be usable on multiple computers and setups. Java heavily advertises this functionality as Write Once, Run Anywhere™. This is often better than just using an interpreted language, as less interpretation is needed for the processor to understand it, so it is faster.

#### Source code vs Object code
Source code is the original high-level code that the programmer produced, while Object code is the machine (or intermediate) code produced by the compiler. Only object code (unless it is an interpreted language) can be executed, as it is in a low-level format that the processor understands.