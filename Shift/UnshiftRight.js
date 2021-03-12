
// Calling unshift puts the new element in index 0. This means that the existing elements all move to the right by one. Their indexes all increase.

 
const a = ['a', 'b'];
const origIndex = a.indexOf('b');
a.unshift('z');
const newIndex = a.indexOf('b');
origIndex + ' becomes ' + newIndex;
Result: 
'1 becomes 2'