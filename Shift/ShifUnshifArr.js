

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