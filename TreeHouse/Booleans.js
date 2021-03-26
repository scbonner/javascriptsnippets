let correctGuess = false;     
//declaring varible correctGuess
const number = 6;      
//storing value of 6 in varible number
const guess = prompt('Guess a number between 1 and 10.');    
//open dialog box 


//plus sign changes string into integer

if (+guess === number) {   
  correctGuess = true;
}
if (correctGuess === true) {
  console.log('You guessed the number!');
} else {
  console.log(`Sorry. The number was ${number}.`);
}