// Empty slots
// When we use new Array, the array appears to be full of undefined.

 
new Array(1)[0];
Result: 
undefined 
// However, the slot in this array is actually empty. Empty means that there's nothing in the slot, not even an undefined. But JavaScript has no empty value, so it returns undefined instead.

// We can use the in operator to see the empty array slot. (For arrays, x in a asks whether the array has something in index x.


['a'].length;
Result: 
1 

0 in ['a'];
Result: 
true 

0 in [undefined];
Result: 
true 
 
(new Array(1)).length;
Result: 
1 

0 in new Array(1);
Result: 
false 

0 in new Array(1).fill('a');
Result: 
true 

0 in new Array(1).fill(undefined);
Result: 
true 

//Replacing elements past the end of an array causes the array to grow.

 
const array = [];
array[2] = 1;
array.length;
Result: 
3 

//The 0 and 1 slots in this array remain empty. They'll return undefined when accessed.


const array = [];
array[2] = 1;
array[0];
Result: 
undefined 

//Like before, we can use the in operator to see that some slots are empty.

 
const array = [];
array[2] = 1;
2 in array;
Result: 
true 
 
const array = [];
array[2] = 1;
1 in array;
Result: 
false 

// fill will fill in those empty slots. That's why it's so often paired with new Array(). This is a good way to avoid arrays with empty slots.

 
const allEmpty = new Array(3);
allEmpty.fill('d');
Result: 
['d', 'd', 'd'] 

// Empty slots can cause confusing bugs. For example, the forEach method will skip over empty slots. It won't even call our provided function for those slots.


const allEmpty = new Array(3);
const elementsCounted = 0;
allEmpty.forEach(x => {
  elementsCounted += 1;
});
elementsCounted;
Result: 
0 

//map will skip empty slots, too.


const allEmpty = new Array(2);
const stillEmpty = allEmpty.map(x => true);
0 in stillEmpty;
Result: 
false 

//However, undefined is an ordinary JavaScript value. Array methods work normally with arrays containing undefined.


const fullOfUndefined = [undefined, undefined];
fullOfUndefined.map(x => 5);
Result: 
[5, 5] 

//reduce, filter, and some other methods also skip empty slots. Try to avoid arrays with empty slots by:

//Always using fill after calling new Array(someSize).
//Not writing to indexes past the end of an array.