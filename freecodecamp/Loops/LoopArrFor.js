Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false when analysed. A loop will continue running until the defined condition returns false.

The three most common types of loops are

for
while
do while
You can type js for, js while or js do while to get more info on any of these. Let's look at them, and some variations, in more detail now.

for loop
Syntax
for ([initialization]); [condition]; [final-expression]) {
   // statement
}
The javascript for statement consists of three expressions and a statement:

Description
initialization - Run before the first execution on the loop. This expression is commonly used to create counters. Variables created here are scoped to the loop. Once the loop has finished it’s execution they are destroyed.
condition - Expression that is checked prior to the execution of every iteration. If omitted, this expression evaluates to true. If it evaluates to true, the loop’s statement is executed. If it evaluates to false, the loop stops.
final-expression - Expression that is run after every iteration. Usually used to increment a counter. But it can be used to decrement a counter too.
statement - Code to be repeated in the loop
any of these three expressions or the statement can be omitted. For loops are commonly used to count a certain number of iterations to repeat a statement. Use a break statement to exit the loop before the condition expression evaluates to false.

Common Pitfalls
Exceeding the bounds of an array

When indexing over an array many times it is easy to exceed the bounds of the array (ex. try to reference the 4th element of a 3 element array).

    // This will cause an error.
    // The bounds of the array will be exceeded.
    var arr = [ 1, 2, 3 ];
    for (var i = 0; i <= arr.length; i++) {
       console.log(arr[i]);
    }

    output:
    1
    2
    3
    undefined
There are two ways to fix this code. Set the condition to either i < arr.length or i <= arr.length - 1

Examples
Iterate through integers from 0-8

for (var i = 0; i < 9; i++) {
   console.log(i);
}

output:
0
1
2
3
4
5
6
7
8
Break out of a loop before condition expression is false

for (var elephant = 1; elephant < 10; elephant+=2) {
    if (elephant === 7) {
        break;
    }
    console.info('elephant is ' + elephant);
}

output:
elephant is 1
elephant is 3
elephant is 5
for...in loop
The for...in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.

for (variable in object) {
...
}
Required/OptionalParameterDescriptionRequiredVariableA different property name is assigned to variable on each iteration.OptionalObjectObject whose enumerable properties are iterated.

Examples
// Initialize object.
a = { "a": "Athens", "b": "Belgrade", "c": "Cairo" }

// Iterate over the properties.
var s = ""
for (var key in a) {
    s += key + ": " + a[key];
    s += "<br />";
    }
document.write (s);

// Output:
// a: Athens
// b: Belgrade
// c: Cairo

// Initialize the array.
var arr = new Array("zero", "one", "two");

// Add a few expando properties to the array.
arr["orange"] = "fruit";
arr["carrot"] = "vegetable";

// Iterate over the properties and elements.
var s = "";
for (var key in arr) {
    s += key + ": " + arr[key];
    s += "<br />";
}

document.write (s);

// Output:
//   0: zero
//   1: one
//   2: two
//   orange: fruit
//   carrot: vegetable

// Efficient way of getting an object's keys using an expression within the for-in loop's conditions
var myObj = {a: 1, b: 2, c:3}, myKeys = [], i=0;
for (myKeys[i++] in myObj);

document.write(myKeys);

//Output:
//   a
//   b
//   c
for...of loop
The for...of statement creates a loop iterating over iterable objects (including Array, Map, Set, Arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

    for (variable of object) {
        statement
    }
DescriptionvariableOn each iteration a value of a different property is assigned to variable.objectObject whose enumerable properties are iterated.

Examples
Array
    let arr = [ "fred", "tom", "bob" ];

    for (let i of arr) {
        console.log(i);
    }

    // Output:
    // fred
    // tom
    // bob
Map
    var m = new Map();
    m.set(1, "black");
    m.set(2, "red");

    for (var n of m) {
        console.log(n);
    }

    // Output:
    // 1,black
    // 2,red
Set
    var s = new Set();
    s.add(1);
    s.add("red");

    for (var n of s) {
        console.log(n);
    }

    // Output:
    // 1
    // red
Arguments object
    // your browser must support for..of loop
    // and let-scoped variables in for loops

    function displayArgumentsObject() {
        for (let n of arguments) {
            console.log(n);
        }
    }


    displayArgumentsObject(1, 'red');

    // Output:
    // 1
    // red
while loop
The while loop starts by evaluating the condition. If the condition is true, the statement(s) is/are executed. If the condition is false, the statement(s) is/are not executed. After that, while loop ends.

Here is the syntax for while loop:

Syntax:
while (condition)

{

  statement(s);

}
statement(s): A statement that is executed as long as the condition evaluates to true.

condition: Here, condition is a Boolean expression which is evaluated before each pass through the loop. If this condition evaluates to true, statement(s) is/are executed. When condition evaluates to false, execution continues with the statement after the while loop.

Example:
    var i = 1;
    while (i < 10) 
    {
      console.log(i);
       i++; // i=i+1 same thing
    }

    Output:
    1 
    2 
    3 
    4
    5
    6
    7
    8
    9
How to Iterate with JavaScript While Loops
While loops will run as long as the condition inside the ( ) is true. Example:

while(condition){
code...
}
Hint 1:

Use a iterator variable such as i in your condition

var i = 0;
while(i <= 4){
}
Spoiler Alert Solution Ahead!
Solution:

// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while (i <= 4){
    myArray.push(i);
    i++;
}
Do...while loop
The do...while loop is closely related to while loop. In the do while loop, the condition is checked at the end of the loop.

Here is the syntax for do...while loop:

Syntax:
 do {

   *Statement(s);*

} while (*condition*);
statement(s): A statement that is executed at least once before the condition or Boolean expression is evaluated and is re-executed each time the condition evaluates to true.

condition: Here, a condition is a Boolean expression. If Boolean expression evaluates to true, the statement is executed again. When Boolean expression evaluates to false, the loops ends.

Example:
var i = 0;
do {
  i = i + 1;
  console.log(i);
} while (i < 5);

Output:
1
2
3
4
5
How to Iterate with JavaScript Do…While Loops
Do...While loops makes sure that the code is executed at least once, and after the execution, if the condition inside the while() is true, it continues with the loop, otherwise it stop.
Solution:

var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while(i <= 10);
