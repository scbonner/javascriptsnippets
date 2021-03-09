

// some and every operate on any array, no matter how big it is.


new Array(1000).fill(true).length;
Result: 
1000 

new Array(1000).fill(true).every(
  x => x === true);
Result: 
true 

const booleans = new Array(1000).fill(true);
booleans[981] = false;
booleans.every(x => x === true);
Result: 
false