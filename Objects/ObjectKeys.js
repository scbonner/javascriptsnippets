
// Second, extra properties will show up if we treat the array like an object. For example, we can use Object.keys to list the properties in an object. We'll get all of the array indexes (not the values), plus any extra properties that we added.


const arr1 = ['a', 'b'];
const arr2 = [];
arr1.five = 5;
Object.keys(arr1);
Result: 
['0', '1', 'five'] 