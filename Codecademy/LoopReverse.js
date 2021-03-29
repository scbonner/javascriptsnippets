
// Looping in Reverse
// What if we want the for loop to log 3, 2, 1, and then 0? With simple modifications to the expressions, we can make our loop run backward!

// To run a backward for loop, we must:

// Set the iterator variable to the highest desired value in the initialization expression.
// Set the stopping condition for when the iterator variable is less than the desired amount.
// The iterator should decrease in intervals after each iteration.
// Instructions
// 1.
// Make a for loop that loops backwards printing 3 to 0 to the console. Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement.

// ****HINT****

// Start your initialization variable in your initialization expression to the first number you want to print, 3.

// Set the condition to check that the iterator variable remains greater than or equal to 0.

// Change the iteration statement so the iterator variable decreases by increments of 1 after each round of the loop. To increase by 1, we use can the operator ++. To decrease by 1, we can use the operator --.


// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 0; counter < 4; counter++){
    console.log(counter);
  }
  
  for (let counter = 3; counter >= 0; counter--) {
    console.log(counter)
  }