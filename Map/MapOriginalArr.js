
const nums = [1, 2, 3];
nums.map(num => num * 10);
nums[0];
Result: 
1 

//additional exercise

// In a previous lesson, we built an array of people's names using forEach. Here's that example again.


const people = [
  {name: 'Amir'},
  {name: 'Betty'},
];
const names = [];
people.forEach(person => {
  names.push(person.name);
});
names;
Result: 
['Amir', 'Betty'] 