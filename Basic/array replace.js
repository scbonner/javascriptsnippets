// null and undefined.
// Variable definitions with let and const.
// Conditionals (if) and ternary conditionals (a ? y : b).
// C-style for loops: for (let i=0; i<10; i++) { ... }.
// Regular functions: function f() { ... }.
// Arrow functions: const f = () => { ... }.

// We can replace array elements with [] and =.


const strings = ['a', 'b', 'c'];
strings[2] = 'x';
strings;
['a', 'b', 'x'];


// This course covers all of the methods on JavaScript arrays. Arrays are sequences of values that have a specific order and a length.


['a', 'b', 'c'].length;
Result: 
3 


[].length;
Result: 
0 

// Values can be retrieved from an array using []. Indexes start at 0.
['a', 'b', 'c'][0];
Result: 
'a' 


['a', 'b', 'c'][2];
Result: 
'c' 


// We can replace array elements with [] and =.

const strings = ['a', 'b', 'c'];
strings[2] = 'x';
strings;
Result: 
['a', 'b', 'x'] 

// Write a function that puts a 0 in element 1 of an array. Make sure that the function returns null. Returning null makes it clear that the function modifies the array.

function at(arr) {
    arr[1] = 0
    return null
}

function abc(arr) {
    arr[1] = 0
    return null 
}

function abc(num) {
    num[1] = 0
    return null
} 

function abc(num) {
    num[1] = 0
    return null
}

function abc(num) {
    num[1] = 0
    return null
}


function ff(num) {
    num[1] 0
    return null;
}

function f(nums) {
    nums[1] = 0
    return null
}

>
const array = [0, 0, 0];
f(array)=;
Expected: null but got: undefined
>
const array = [0, 0, 0];
f(array);
array;
Expected: [0, 0, 0] OK!
>
const array = [1, 1, 1];
f(array);
array;
Expected: [1, 0, 1] but got: [1, 1, 1]
>
const array = [1, 2, 3];
f(array);
array;
Expected: [1, 0, 3] but got: [1, 2, 3]
>
const array = [1, 2, 3, 4, 5, 6];
f(array);
array;
Expected: [1, 0, 3, 4, 5, 6] but got: [1, 2, 3, 4, 5, 6]
>
const array = ['a', 'b', 'c'];
f(array);
array;




// Write a function isEmpty(arr) that returns true if the array is empty.

function isEmpty(arr) {
    return true
}


