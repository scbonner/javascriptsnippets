
// There's an easier way. With map, we don't need to create and modify a new array. Instead, we can build the new array directly.


const people = [
  {name: 'Amir'},
  {name: 'Betty'},
];
people.map(person => person.name);
Result: 
['Amir', 'Betty'] 
