
// Nested Arrays
// Earlier we mentioned that arrays can store other arrays. When an array contains another array it is known as a nested array. Examine the example below:

const nestedArr = [[1], [2, 3]];
// To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element:

const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]

// Notice that nestedArr[1] will grab the element in index 1 which is the array [2, 3]. Then, if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.

const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

// In the second console.log() statement, we have two bracket notations chained to nestedArr. We know that nestedArr[1] is the array [2, 3]. Then to grab the first element from that array, we use nestedArr[1][0] and we get the value of 2.

// Instructions
// 1.
// Let’s make a nested array! Create a variable numberClusters. Assign as its value an array with three array elements.

// The first array element should hold the elements 1 and 2 in that order.
// The second array element should hold the elements 3 and 4 in that order.
// The third array element should hold the elements 5 and 6 in that order.
// Checkpoint 2 Passed

// Stuck? Get a hint
// 2.
// Awesome, you made a nested array! Now declare a variable named target using the const keyword and assign to access the element 6 inside numberClusters.

// Checkpoint 3 Passed

// Hint
// You cannot simply assign const target = 6. Use bracket notation to first access the array that 6 is stored in, then use bracket notation again to grab the element 6. Remember arrays are zero-indexed, the first element has an index of 0! Check out the following example:

const newArr = [['one', 'two'], ['three', 'four'], ['five', 'six']];
 
const grabbingThree = newArr[1][0];
console.log(grabbingThree); // Output: 'three'