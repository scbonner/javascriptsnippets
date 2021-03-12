
// Shift
// We've seen push and pop. They add and remove elements on the end of arrays.

// shift and unshift do the same, but for the beginning of the array. shift removes the first element of the array and returns it.


const a = ['a', 'b'];
a.shift();
a;
Result: 
['b'] 


const a = ['a', 'b'];
a.shift();
Result: 
'a' 

//unshift adds an element to the beginning of an array.


const a = ['a', 'b'];
a.unshift('z');
a;
Result: 
['z', 'a', 'b'] 


// unshift returns the array's length, including the newly-added element. This matches push, which also returns the array's length.


const a = ['a', 'b'];
a.unshift('z');
Result: 
3 


// shift and unshift have somewhat confusing names. Here's one way to remember them. shift "shifts" all of the elements down by one. Index 2 becomes index 1; index 1 becomes index 0; etc. unshift does the opposite.

// Here's a demonstration.


const a = ['a', 'b', 'c'];
const origIndex = a.indexOf('c');
a.shift();
const newIndex = a.indexOf('c');
origIndex + ' becomes ' +  newIndex;
Result: 
'2 becomes 1' 


// Calling unshift puts the new element in index 0. This means that the existing elements all move to the right by one. Their indexes all increase.


const a = ['a', 'b'];
const origIndex = a.indexOf('b');
a.unshift('z');
const newIndex = a.indexOf('b');
origIndex + ' becomes ' + newIndex;
Result: 
'1 becomes 2' 


// Like pop and push, shift and unshift change the array itself.


const a = [1, 2, 3];
a.shift();
a.shift();
a;
Result: 
[3] 


const a = [1, 2, 3];
a.shift();
a.unshift('a');
a;
Result: 
['a', 2, 3] 