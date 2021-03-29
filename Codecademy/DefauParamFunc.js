

// Set Default Parameters for Your Functions
// In order to help us create more flexible functions, ES6 introduces default parameters for functions.

// Check out this code:

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());


// The console will display the strings Hello John and Hello Anonymous.

// The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

// Hints
// Hint 1
// Let’s identify where the parameter value is in JS function

// try to solve the problem now

// Hint 2
// Set value equal to something so that it is that value by default

// try to solve the problem now

// Solutions
// Solution 1 (Click to Show/Hide)

// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line


const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
Code Explanation
This section is pretty straightforward. Pass this section by setting the value parameter equal to 1. When the function comes across test cases where value has not been passed anything, then value will be assigned one by 