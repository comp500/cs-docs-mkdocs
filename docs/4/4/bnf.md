# 4.4.3 Context-free languages

## Specification

### 4.4.3.1 Backus-Naur Form (BNF)/syntax diagrams
Context-free languages are languages that have more complex syntax (language rules) than can be specified in a [regular expression](./regular-languages.md). Almost all programming languages are context-free languages.

BNF allows you to represent context-free languages in a concise way. It does this using simple language rules, for example:
``` bnf
<pencil_hardness> := HB | <scale_of_hardness> | <simple_hardness>

<simple_hardness> := H | B
<scale_of_hardness> := <simple_hardness><numeric_hardness>
<numeric_hardness> := 2 | 3 | 4 | 5 | 6
```

The above example defines completely the language of pencil hardness, the scale of B6 to HB to H6.

#### What do the symbols mean?
Symbol | Meaning
------ | -------
&lt;name&gt; | A statement defined in the language
:= | The previous statement is replaced by the following statement when it is evaluated
\| | OR, used in statement definitions to show the possible values of a statement

#### Another example
``` bnf
<unsigned_int> := <digit> | <digit><unsigned_int>
<digit> := 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```