
// Find
// Sometimes we need to find an element that matches a description. We already saw findIndex, which finds the index of an element. Now let's write our own find that finds the matching element itself.


function find(array, callback) {
  const index = array.findIndex(callback);
  if (index === -1) {
    return undefined;
  } else {
    return array[index];
  }
}
find([5, 6, 7], num => num / 2 === 3);
Result: 
6 

// Fortunately, a find method like ours is built in to Array. We don't have to write it ourselves.


[5, 6, 7].find(num => num / 2 === 3);
Result: 
6 

// We can use this to find objects with certain properties.

 
const users = [
  {name: 'Amir', admin: false},
  {name: 'Betty', admin: true},
];
users.find(user => user.admin).name;
Result: 
'Betty' 
