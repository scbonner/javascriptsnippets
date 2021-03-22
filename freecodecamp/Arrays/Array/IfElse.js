if...else
// The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.


Syntax
if (condition)
   statement1
[else
   statement2]
condition
An expression that is considered to be either truthy or falsy.
statement1

Statement that is executed if condition is truthy. Can be any statement, including further nested if statements. To execute multiple statements, use a block statement ({ ... }) to group those statements. To execute no statements, use an empty statement.
statement2
// Statement that is executed if condition is falsy and the else clause exists. Can be any statement, including block statements and further nested if statements.
// Description
// Multiple if...else statements can be nested to create an else if clause. Note that there is no elseif (in one word) keyword in JavaScript.

if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
...
else
  statementN
// To see how this works, this is how it would look if the nesting were properly indented:

if (condition1)
  statement1
else
  if (condition2)
    statement2
  else
    if (condition3)
...

// To execute multiple statements within a clause, use a block statement ({ ... }) to group those statements. In general, it is a good practice to always use block statements, especially in code involving nested if statements:

if (condition) {
  statements1
} else {
  statements2
}

// Do not confuse the primitive Boolean values true and false with truthiness or falsiness of the Boolean object. Any value that is not false, undefined, null, 0, -0, NaN, or the empty string (""), and any object, including a Boolean object whose value is false, is considered truthy when used as the condition. For example:

var b = new Boolean(false);
if (b) // this condition is truthy

// Examples
// Using if...else

if (cipher_char === from_char) {
  result = result + to_char;
  x++;
} else {
  result = result + clear_char;
}

// Using else if
// Note that there is no elseif syntax in JavaScript. However, you can write it with a space between else and if:

if (x > 50) {
  /* do something */
} else if (x > 5) {
  /* do something */
} else {
  /* do something */
}

// Assignment within the conditional expression
// It is advisable to not use simple assignments in a conditional expression, because the assignment can be confused with equality when glancing over the code. For example, do not use the following code:

if (x = y) {
  /* do something */
}

// If you need to use an assignment in a conditional expression, a common practice is to put additional parentheses around the assignment. For example:

if ((x = y)) {
  /* do something */
}
