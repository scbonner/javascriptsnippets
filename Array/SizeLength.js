


// What if we don't know how many "d"s we need in advance? First, we can create an array of a given size.


const size = 1 + 2;
new Array(size).length;
Result: 
3 

const size = 3 + 2;
new Array(size).length;
3

const size = 8
new Array(size).length;
8

const size = 8 - 3;
new Array(size).length;
5