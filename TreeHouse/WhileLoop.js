
// function getRandomNumber(upper) {
//     return Math.floor( Math.random() * upper ) + 1;
// }


//Need to run loop 10 times
//Declare a variable named counter
// let counter = 0;
// while ( counter < 10 ) {           //test condition
//     console.log( getRandomNumber(10) );
//     counter += 1;    //adding 1 each time it loops through

//}

// Remember, the value of a variable declared with const cannot be changed through reassignment. We're using the addition assignment operator (+=) to add one to the current value of counter, until it reaches the value 10.

// let counter = 0;
// while ( counter < 10 ) {
//   console.log( getRandomNumber(10) );
//   counter += 1;
// }
// // In this case, it's important to use the keyword let, which, as you learned, lets you change (or manipulate) a variable's value through reassignment.

// let secret;
// do {
//      secret = prompt("What is the secret password?");
// } while (secret !== 'sesame');


// // This should run after the loop is done executing
// alert("You know the secret password. Welcome!");


let secret;  // create an empty variable for secret.

do { // start the do statement
    secret = prompt("What is the secret password?"); // assign prompt() to secret and show user the field to enter answer.
  } while (secret !== "sesame"); // check user input if `sesame` entered othewise run do {} statement.

alert("You know the secret password. Welcome!"); // if answer if correct display alert message.
