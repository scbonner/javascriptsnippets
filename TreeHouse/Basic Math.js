

// Doing Basic Math
// Developers frequently use numbers for performing calculations; you'll likely spend a lot of time working with numbers in JavaScript. If you create a game, for example, you'll need to keep track of a player's score. If you build an eCommerce site, you'll need to figure out the total cost of items in a visitor's shopping cart. And if you want to calculate the number of days until your next birthday, you'll need to use numbers and do some math.

// Arithmetic Operators
// JavaScript lets you perform most mathematical calculations, including addition, subtraction, multiplication, and division.

// For example, in a previous course, you used the + symbol (or the addition operator) to add two numbers together:

2 + 7 // 9
To subtract numbers, use a minus sign (or the subtraction operator):

4 - 3 // 1
// To divide two numbers, you use a forward slash character, also called the division operator:

6 / 3 // 2

// The division operator instructs the JavaScript engine to divide the number on the left by the number on the right. In the example above, divide 6 by 3 (which is 2).

// To multiply numbers, use the multiplication operator, which is represented by an asterisk. For example, the following means 10 times 9:

10 * 9 // 90
// You won't spend much time doing literal calculations with JavaScript, meaning you don't need to ask JavaScript what '2 + 2' is – we have calculators for that. However, you will frequently store numbers in variables, and then perform calculations with those variables.

// For example, you might start a game by creating a variable named score:

let score;
And store the number 0 in it:

let score = 0;

// Later in the program, maybe when the player destroys an invading spaceship, you add 100 points to that score:

score = score + 100;

// The variable score appears twice in this statement. Remember, when putting a value into a variable, whatever is on the right goes into the variable on the left. In this case, the value on the right is the current contents of the variable score plus 100. That total is then stored back into the variable on the left -- this is how we update a variable.

// The let keyword allows you to add to the current value of score.
// Assignment Operators
// There are shorthand methods for performing each of the basic mathematical operations on a variable: addition, subtraction, multiplication and division. For example, to add 10 to the contents of a variable, use += 10. This both adds 10 to the current variable and assigns the result back into the variable.

// There are also shorthands for subtracting from a variable, multiplying a variable by a value, and dividing a variable by a value.

// Change the value of a variable	Shorthand version
score = score + 10;	score += 10;
score = score - 20;	score -= 20;
score = score * 5;	score *= 5;
score = score / 2;	score /= 2;
