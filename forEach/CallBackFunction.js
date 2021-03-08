// In all of the examples above, we pass functions directly to forEach. Functions are values in JavaScript, so we can pass them in other ways as well. For example, we can put the function in a variable, then pass the variable to forEach. The following examples define our forEach callback function in different ways, but they all have the same effect.


let sum = 0;
[1, 2, 3, 4].forEach(n => {
  sum += n;
});
sum;
Result: 
10 


let sum = 0;
function addToSum(n) {
  sum += n;
}
[1, 2, 3, 4].forEach(addToSum);
sum;
Result: 
10 


let sum = 0;
const addToSum = n => sum += n;
[1, 2, 3, 4].forEach(addToSum);
sum;
Result: 
10 