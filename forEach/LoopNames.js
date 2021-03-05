// In the next example, we want to build a list of peoples' names. We use a for loop to add each name to an array. That requires looking elements up by their indexes i.


const people = [
  {name: 'Amir'},
  {name: 'Betty'},
];
const names = [];
for (let i=0; i<people.length; i++) {
  names.push(people[i].name);
}
names;
Result: 
['Amir', 'Betty'] 
