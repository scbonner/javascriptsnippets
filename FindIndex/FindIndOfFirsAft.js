

// The callback function passed to findIndex gets three arguments. Usually you only need the first, which is the current array element. But sometimes the others are useful too. The second argument is the element's index in the array.

// This example finds the index of the first 'a' after the 2nd element.

['a', 'c', 'b', 'a'].findIndex(
    (elem, index) => index > 1 && elem === 'a');
    Result: 
    3 


    // The whole array is passed to our callback as its third argument. This is rarely needed, but it's there just in case.

 
['a', 'b', 'c'].findIndex(
  (element, index, array) => array[index] === 'c');
Result: 
2 