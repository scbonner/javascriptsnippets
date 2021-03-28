
// Which of the following adds 20 to the current value of the variable points, then stores the result back into points.

// Well done! That's the correct answer.	
A	
points + points = 20

B	
points = 20 + points;  //correct answer

C	
points + 20;

D	
points =+ 20;


// Use the shorthand operator that adds 20 to the current value of the variable points, then stores the result back into points.

points += 20;


// Create another variable named profit. It should hold the value of the salesTotal variable minus the wholesalePrice multiplied by the quantity. In other words, if you sold 47 items for 9.99 but only paid 5.45 for each item, how much money did you make?

const wholesalePrice = 5.45;
const retailPrice = 9.99;
const quantity = 47;
const salesTotal = retailPrice * quantity;

const profit = salesTotal - wholesalePrice * quantity;

// How much money you made

const totalSales = profit * quantity;


//For this Code Challenge you need to use JavaScript's Math methods. Declare a new variable named tempRounded. Assign it the temperature variable rounded to the nearest integer.

const temperature = 37.5;
const tempRounded = Math.round(37.5);
console.log(tempRounded);


const dieRoll = Math.floor(Math.random() * 6) + 1;
console.log(`You rolled a ${dieRoll}.`);


//collect input from a user (prompt)
const inputHigh = prompt('Please provide a number');

//convert the input to a number
const highNumber = parseInt(inputHigh);

//Use Math.random() and the user's number to generate a random number
const randomNumber = Math.floor(Math.random() * highNumber) + 1;

//create a message displaying the random number
console.log(`${randomNumber} is a random number between 1 and ${highNumber}.`);


