// forEach executes a function once for each element in an array. Let's use it to sum an array of numbers.


const nums = [1, 2, 3];
let sum = 0;
nums.forEach(num => {
  sum = sum + num;
});
sum;
Result: 
6 