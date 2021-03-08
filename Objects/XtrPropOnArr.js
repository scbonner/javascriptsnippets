

// Now we have two nicely separate concepts: there's a list of team members, and there's a numerical limit on the number of members. Together, the members and the member limit form a team object. If a function needs the full team, we can pass that object; but if it only needs the members, we can pass only the array. Nothing about this is surprising or unusual.

// A couple more details about extra properties on arrays. First, looping with forEach will ignore extra array properties.


const arr1 = ['a', 'b'];
const arr2 = [];
arr1.five = 5;
arr1.forEach(i => arr2.push(i));
arr2;
Result: 
['a', 'b'] 