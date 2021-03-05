
// It's important to check your indexOf calls for that -1 return value! Otherwise you can introduce subtle bugs. Here's an example.

// Let's try to slice an array from a certain element forward. We don't check -1 from indexOf, so that -1 might be used as an index. (A hint in case you get stuck: [1, 2, 3].slice(-1) returns [3].)


const abc = ['a', 'b', 'c'];
abc.slice(abc.indexOf('b'));
Result: 
['b', 'c'] 

const abc = ['a', 'b', 'c'];
abc.slice(abc.indexOf('c'));
Result: 
['c'] 

const abc = ['a', 'b', 'c'];
abc.slice(abc.indexOf('d'));
Result: 
['c'] 

