// // JavaScript Arrays: Slice

// // Sometimes we want to access a subsection of an array. For that, we use the slice method. It takes an argument begin, which is the index to start from.

//slice()
//slice(start)
//slice(start, end)

// start Optional
// Zero-based index at which to start extraction.
// A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
// If start is undefined, slice starts from the index 0.
// If start is greater than the index range of the sequence, an empty array is returned.
// end Optional
// Zero-based index before which to end extraction. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
// A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.
// If end is omitted, slice extracts through the end of the sequence (arr.length).
// If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).
// Return value
// A new array containing the extracted elements.

// Description
// slice does not alter the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:

// For object slice copies object references into the new array. Both the original and new array refer to the same object. If an object changes, the changes are visible to both the new and original arrays.
// For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array. Changes to the string, number, or boolean in one array do not affect the other array.
// If a new element is added to either array, the other array is not affected.


[10, 20, 30, 40, 50].slice(3);
 Result: 
[40, 50] 

['a', 'b', 'c'].slice(1);
Result: 
['b', 'c'] 

// // slice can take a second argument, end. It slices all 
// // elements from begin up to end, but not including end.

[10, 20, 30, 40, 50].slice(1, 2);
 Result: 
[20] 

[10, 20, 30, 40, 50].slice(1, 3);
Result: 
[20, 30] 

// We can slice beyond the end of the array. 
// It gives the same result as slicing right up to the last element.


[10, 20].slice(0, 2);
Result: 
[10, 20] 


[10, 20].slice(0, 3);
Result: 
[10, 20] 

// If our begin index is past the end of the array, we get an empty result.

// Think of it like this. The array [10, 20] 
// has indexes 0 and 1. So what's in indexes 2 through 3? 
// There's nothing there. The slice of those indexes is empty.

> 
[10, 20].slice(2, 3);
Result: 
[] 



// With no arguments, slice will slice all elements
//  of the array. This effectively copies the array. 
//  If we change the original, it won't affect the copy.
//  Likewise, if we change the copy, it won't affect the original.


const orig = [10, 20, 30];
const copy = orig.slice();
copy[0] = 1;
orig;
Result: 
[10, 20, 30] 

const orig = [10, 20, 30];
const copy = orig.slice();
orig[0] = 1;
copy;
Result: 
[10, 20, 30] 

// Slice is quite complex, but copying arrays is its most common use.

// Write a function copyArray that returns a copy of an array. Changes to the copy shouldn't affect the original array and vice-versa.

function copyArray(array) {
    return array.slice();
  }
  



// Trying to reassign a read-only const variable 
// will throw an error, but by using various element
//  assignment you can access and change the value of 
//  an array just like you would with let or var.

function takeFirst(arr, n) {
    return arr.slice(0, n);
  }
or

function takeFirst(arr, n) {
if (n > arr.length) {
    return arr.slice(0, n);
  }
   return arr.slice(0, n);