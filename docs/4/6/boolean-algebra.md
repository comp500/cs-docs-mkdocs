# 4.6.5 Boolean algebra

## Lesson Notes
To make efficient circuits, they must be as simplified as possible while still carrying out the same operations. Truth tables are one way to work this out, but for larger circuits it would take a long time to write out the truth table for every gate. Boolean algebra is a way to simplify circuits similarly to mathematical simplification.

Mathematical paradigm | Boolean equivalent
--- | ---
Multiplication | AND
Addition | OR
Complement | NOT
Subtraction | null
Division | null
“2” | null

This mathematical equivalence allows you to use BIDMAS on boolean expressions, so that you can simplify them easier.

## Specification

### 4.6.5.1 Using Boolean algebra

#### Boolean Identities
Here is a simple table to help you remember the common Boolean Identites:

Identity name|AND form|OR form
---|---|---
Identity|\`A\*1 = A\`|\`A\*0 = A\`
Null / Dominance law|\`A\*0 = 0\`|\`A+1 = 1\`
Idempotence law|\`A\*A=A\`|\`A+A=A\`
Inverse law|\`A\*bar(A) = 0\`|\`A+bar(A) = 1\`
Commutative law|\`A\*B = B.A\`|\`A+B = B+A\`
Associative law|\`(A\*B)\*C = A\*(B\*C)\`|\`(A+B)+C = A+(B+C)\`
Distributive law|\`A+B\*C = (A+B)\*(A+C)\`|\`A\*(B+C) = A\*B+A\*C\`
Absorption law|\`A\*(A+B) = A\`|\`A+A\*B = A\`
De Morgan's law|\`bar((A\*B))=bar(A)+bar(B)\`|\`bar((A+B))=bar(A)\*bar(B)\`
Double Complement law|\`bar(bar(A)) = A\`|(same)

You must learn all of these laws off by heart. They can be proved using truth tables, as shown:

##### Identity
\`F = A+0 = A\` and \`F = A\*1 = A\`

A|B|F| |A|B|F
---|---|---|---|---|---|---
**0**|**0**|**0**| |0|0|0
0|1|1| |**0**|**1**|**0**
**1**|**0**|**1**| |1|0|0
1|1|1| |**1**|**1**|**1**

##### Null / Dominance law
\`F = A+1 = 1\` and \`F = A\*0 = 0\`

A|B|F| |A|B|F
---|---|---|---|---|---|---
0|0|0| |**0**|**0**|**0**
**0**|**1**|**1**| |0|1|0
1|0|1| |**1**|**0**|**0**
**1**|**1**|**1**| |1|1|1

#####  Inverse law
\`F = A+bar(A) = 1\` and \`F = A\*bar(A) = 0\`

A|B (not A)|F| |A|B (not A)|F
---|---|---|---|---|---|---
0|0|0| |0|0|0
**0**|**1**|**1**| |**0**|**1**|**0**
**1**|**0**|**1**| |**1**|**0**|**0**
1|1|1| |1|1|1

#####  Double Complement Law
\`A = bar(bar(A))\`

\`A\`|\`bar(A)\`|\`bar(bar(A))\`
---|---|---
0|1|0
1|0|1

#####  Absorption law
\`A+(A\*B) = A\` 

\`A\`|\`B\`|\`A\*B\`|\`A+A\*B\`
---|---|---|---
0|0|0|0
0|1|0|0
1|0|0|1
1|1|1|1

Like terms are absorbed. Opposite operators must be used within and outside the brackets, for absorption to be used. The term that is outside the brackets must also be inside.

Examples of where it can be used are as follows:

\`bar(B)+(A\*bar(B)) = bar(B)\`

\`A+A\*B = A\`

\`A\*(A+B) = A\`

#####  Commutative law
\`A+B = B+A\` and \`A\*B = B\*A\` (not shown)

\`A\`|\`B\`|\`A + B\`| |\`B\`|\`A\`|\`B + A\`
---|---|---|---|---|---|---
0|0|0| |0|0|0
0|1|1| |0|1|1
1|0|1| |1|0|1
1|1|1| |1|1|1

The order of AND and OR arguments doesn't matter.

#####  Associative law
\`(A+B)+C = A+(B+C)\` (same for AND)

A|B|C|\`A+B\`|\`(A+B)+C\`|\`B+C\`|\`A+(B+C)\`
---|---|---|---|---|---|---
0|0|0|0|0|0|0
0|0|1|0|1|1|1
0|1|0|1|1|1|1
0|1|1|1|1|1|1
1|0|0|1|1|0|1
1|0|1|1|1|1|1
1|1|0|1|1|1|1
1|1|1|1|1|1|1

##### Distributive law
\`A\*B+A\*bar(B) = A\*(B+bar(B))\`

\`A\*(B+bar(B)) = A\*B + A\*bar(B)\`

The distributive law is essentially multiplying/factorising brackets.

#### De Morgan's Law
To execute De Morgan's Law, you must swap the AND/OR operator, then NOT the whole operation. The law works in both directions, so you can also remove a NOT around an AND/OR operation and swap the operator. This is memorable as **"break the line and change the sign"**. This allows you to create circuits using less types of gates, e.g. NAND/NOR gates rather than AND and OR gates.

\`F = bar(A\*B) = bar(A) + bar(B)\`
and
\`F = bar(A+B) = bar(A) \* bar(B)\`