
// Instruction
// Beware of Infinite Loops!
// One important concept you should keep in mind about loops is the infinite loop. An infinite loop, as the name suggests, is a loop that keeps running forever.

// For example, a while loop's condition gets evaluated before the loop runs. That is, if the test condition is true at the beginning, the loop runs:

while ( condition ) {
  // execute code if condition is true
}
// You need a way to break out of the loop. In other words, something has to change inside the loop to stop it from running. There are a few ways to do this. One way is with a keyword you'll learn about in the next stage called break, which lets you exit a loop.

// As you've learned, one common method for exiting a loop is to change a variable inside the loop to cause the test condition to evaluate to false. For example, increment the value assigned to a counter variable to stop the loop when counter is no longer less than 10:

let counter = 0;
while ( counter < 10 ) {
  // execute code
  counter++;
}
// What if the condition is always true?
// If the test condition is always true, the loop never stops. Programmers call this an infinite (or endless) loop, and it's generally a bad thing. For example, the statements in the following while loop would execute forever because the condition never becomes false:

while ( true ) {
  // execute code endlessly
}

// true is always true, so there's no way that the above condition will ever become not true; therefore, the code inside the while block runs on and on and on.
// Consider the following while statement:

let counter = 0;
while ( counter >= 0 ) {
  console.log(`The counter is: ${counter}`)
  counter++;
}

// The counter starts at 0 and increases each time through the loop. Since counter will always be greater than or equal to 0, the condition will ALWAYS be true.

// Avoid Infinite Loops
// An infinite loop is like never telling runners in a race when they've gone around the track enough times and completed the race. Without checking that the runner has made it around the track enough times, the runner will keep on running and running and running in an endless loop. Eventually, the racer will become exhausted and collapse. A web browser stuck in an infinite loop can also run out of energy, crash, or at least stop the web page from working any longer.

// an infinite loop running in the console
// An infinite loop endlessly logging numbers to the console
// Ensure that the condition in a loop eventually becomes false – otherwise, the loop will never end. If you accidentally create an infinite loop, it could crash your browser or computer. It's important to be aware of infinite loops so you can avoid them.

// Now you have two different types of loops in your JavaScript toolkit. In the next stage, you'll learn the most common type of loop -- the for loop.

// Resources
// Stop infinite loops
// How do you stop an infinite loop in Javascript?