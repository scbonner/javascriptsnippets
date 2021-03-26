// The Conditional Challenge Solution6:23
// with Guil Hernandez
// There are several ways you could've built the quiz app. This video covers one solution, using only the concepts taught in this course.

// Teacher's Notes
// Questions?16
// Video Transcript
// Downloads
// Workspaces
// Correction to the "ranking" conditional statement
// The second else if statement should check for 1-2 correct answers using the condition ( correct >= 1 ):

if ( correct === 5 ) {
  rank = "Gold"; 
} else if ( correct >= 3 ) {
  rank = "Silver";  
} else if ( correct >= 1 ) { // check for 1-2 correct
  rank = "Bronze";  
} else {
  rank = "None :(";
}


const money = 9;
const today = 'Friday'

if ( money > 10 && today === 'Friday' ) {
  alert("Time to go to the theater.");    
} else if ( money >= 50 && today === 'Friday' ) {
  alert("Time for a movie and dinner.");    
} else if ( money <= 9 && today === 'Friday' ) {
  alert("It's Friday, but I don't have enough money to go out.");   
} else {
  alert("This isn't Friday. I need to stay home.");
}
