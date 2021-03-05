// We can modify the array's elements during the forEach.


const people = [
  {name: 'Ebony'},
  {name: 'Fang'},
];
people.forEach(person => {
  person.name = person.name.toUpperCase();
});
people[0].name;
Result: 
'EBONY' 
