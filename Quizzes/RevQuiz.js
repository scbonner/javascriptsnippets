It's time to review! These examples are all taken from lessons that you've finished. Revisiting them makes sure that you haven't forgotten anything.

Type in what each expression will evaluate to. For example, for the prompt 1 + 1, you would type 2.

> 
const size = 1 + 2;
new Array(size)[0];
Result: 
undefined 
Review progress as of today :
Learn
1 day
4 days
16 days
64 days
This code example came from the New and fill lesson.
> 
[1, 2].concat([3, 4], [5, 6]);
Result: 
[1, 2, 3, 4, 5, 6] 
Review progress as of today :
Learn
1 day
4 days
16 days
64 days
This code example came from the Concat lesson.
> 
const abc = ['a', 'b', 'c'];
abc.indexOf('d');
Result: 
-1 
Review progress as of today :
Learn
1 day
4 days
16 days
64 days
This code example came from the Index of lesson.
> 
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
Review progress as of today :
Learn
1 day
4 days
16 days
64 days
This code example came from the For each lesson.
> 
const abc = ['a', 'b', 'c'];
abc.indexOf('a');
Result: 
0 
Review progress as of today :
Learn
1 day
4 days
16 days
64 days
This code example came from the Index of lesson.
> 
const size = 1 + 2;
new Array(size).fill('d');
Result: 
['d', 'd', 'd'] 
Review progress as of today :
Learn
1 day
4 days
16 days
64 days
This code example came from the New and fill lesson.
> 
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
