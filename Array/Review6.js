

// It's time to review! These examples are all taken from lessons that you've finished. Revisiting them makes sure that you haven't forgotten anything.

// Type in what each expression will evaluate to. For example, for the prompt 1 + 1, you would type 2.


const size = 1 + 2;
new Array(size)[0];
Result: 
undefined 


// This code example came from the New and fill lesson.

[1, 2].concat([3, 4], [5, 6]);
Result: 
[1, 2, 3, 4, 5, 6] 


// This code example came from the Concat lesson.


const abc = ['a', 'b', 'c'];
abc.indexOf('d');
Result: 
-1 

// This code example came from the Index of lesson.

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

const people = [
  {name: 'Harry'},
  {name: 'Sally'},

];
const names = [];
people.forEach(person => {
  names.push(person.name);
});
names;  //calling or evoking
Result:
['Harry', 'Sally']

const people = [
  {name: 'Willie'},
  {name: 'Tommy'},
  {name: 'Harry'}
];
const names = [];
people.forEach(person => {
  names.push(person.name);
});
names;
['Willie', 'Tommy', 'Harry']



// This code example came from the For each lesson.

const abc = ['a', 'b', 'c'];
abc.indexOf('a');
Result: 
0 

// This code example came from the Index of lesson.

const size = 1 + 2;
new Array(size).fill('d');
Result: 
['d', 'd', 'd'] 


// This code example came from the New and fill lesson.

const a1 = [1, 2];
const a2 = [3, 4];
a1.concat(a2);
a1;
Result: 
[1, 2] 

const nums = [1, 2, 3];
let sum = 0;
nums.forEach(num => {
  sum = sum + num;
});
sum;
Result: 
6 
