// forEach lets us write the same code without the index variable i. We pass a function to forEach, which runs the function on each element.


const people = [
  {name: 'Cindy'},
  {name: 'Dalili'},
];
const names = [];
people.forEach(person => {
  names.push(person.name);
});
names;
Result: 
['Cindy', 'Dalili'] 