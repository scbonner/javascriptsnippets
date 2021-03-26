// Numbers in JavaScript
// By Guil Hernandez

// Note: To get the most out of instruction steps, be sure to write all of your code and avoid copying/pasting from the examples.
// Numbers in JavaScript are as straightforward as they sound; you don’t need any special syntax for numbers, you write them straight into JavaScript.

// In JavaScript, numbers can be whole numbers (called integers). For example:

5
0
-100
9999
// Or numbers with decimal points to represent fractions of a whole number like:

3.14
-9.88888
.0000009
// Numbers like these with decimal points are also called "floating point numbers." JavaScript even lets you use scientific notation to represent really large or really small numbers:

9e-6 // same as .000009
9e+6 // same as 9000000
// Storing Numbers in Variables
// Just as with string values, you can put a number in a variable, or "assign" a number to a variable using the equals sign (or assignment operator):

let score = 0;
const pi = 3.141592653589793;
const absoluteZero = -273.15;
const numberOfAtomsOnEarth = 1.33e+105;
// Unlike strings, you don't put quote marks around a number. If you do, then you have a string, not a number. This is one confusing part about working with strings and numbers. For example, consider the following code:

const aString = '10'; 
// The value stored in the variable aString is not the number 10. It's a string made up of the character 1 followed by 0 – this can lead to strange and confusing behavior like making some math operations not work as expected. We'll look at how to convert a string containing a number into an actual number in a later video in this stage, but keep this in mind: a number inside quotes isn't really a number.

