

// Problem Explanation
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and apply the algorithm to assign it the corresponding temperature in Fahrenheit.

// Relevant Links
// The Order of Operations: PEMDAS 1.7k
// Order of Operation: Video 804
// Hints
// Hint 1
// Keep in mind the order of operation check the link in the links section for more information.

//Solutions
//Solution 1 (Click to Show/Hide)
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);
// Code Explanation
// Declare the fahrenheit variable.
// Make sure the proper order of arithmetic operations is followed by using parenthesis (()) when needed.
