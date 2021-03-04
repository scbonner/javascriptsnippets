//The concat method creates a new array consisting of the elements in the object on which it is called, followed in order by, for each argument, the elements of that argument (if the argument is an array) or the argument itself (if the argument is not an array). It does not recurse into nested array arguments.

//The concat method does not alter this or any of the arrays provided as arguments but instead returns a shallow copy that contains copies of the same elements combined from the original arrays. Elements of the original arrays are copied into the new array as follows:

//Object references (and not the actual object): concat copies object references into the new array. Both the original and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original arrays. This includes elements of array arguments that are also arrays.

//Data types such as strings, numbers and booleans (not String, Number, and Boolean objects): concat copies the values of strings and numbers into the new array.

// In many languages, + will combine two arrays. That's not true
//  in JavaScript. Trying to do array1 + array2 is usually a mistake. 
//  JavaScript will convert the arrays into strings before adding them.


[1, 2].toString();
Result: 
'1,2' 

 
[1, 2] + [3];
Result: 
'1,23' 


[1, 2] + [3, 4];
Result: 
'1,23,4'

// However, we can combine arrays properly with concat. 
// (It stands for concatenate, which means "link together".)
//  It creates a new array containing all of the elements from the old arrays.


[1, 2].concat([3, 4]);
Result: 
[1, 2, 3, 4] 

// concat takes multiple arguments, so we can combine many arrays if needed:
[1, 2].concat([3, 4], [5, 6]);
Result: 
[1, 2, 3, 4, 5, 6] 


// concat can also be used to add single elements to the end of an array. If its argument isn't an array, it will be added as a single element.

[1, 2].concat(3);
Result: 
[1, 2, 3] 


// concat builds and returns a new array. The original arrays aren't changed.

const a1 = [1, 2];
const a2 = [3, 4];
a1.concat(a2);
a1;
Result: 
[1, 2] 