
// Fortunately, this doesn't affect normal uses of arrays. When we store values at the array's indexes and read them back, everything works normally.

// However, there are some weird effects if we look closely. Most notably, we can assign to arbitary properties of the array.


const arr = ['a', 'b', 'c'];
arr['five'] = 5;
arr.five;
Result: 
5 

const arr = ['a', 'b', 'c'];
arr.six = 6;
arr['six'];
Result: 
6 