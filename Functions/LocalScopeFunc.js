// Local Scope and Functions
// Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

// Here is a function myTest with a local variable called loc.

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc);   // loc is not defined defined outside of the function.

// The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

// Note: The console will still have 'ReferenceError: myVar is not defined', but this will not cause the tests to fail.


function myLocalScope() {

    // Only change code below this line
    var myVar;
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);