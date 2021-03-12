

// shift and unshift have somewhat confusing names. Here's one way to remember them. shift "shifts" all of the elements down by one. Index 2 becomes index 1; index 1 becomes index 0; etc. unshift does the opposite.

// Here's a demonstration.


const a = ['a', 'b', 'c'];
const origIndex = a.indexOf('c');
a.shift();
const newIndex = a.indexOf('c');
origIndex + ' becomes ' +  newIndex;
Result: 
'2 becomes 1' 