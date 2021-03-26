

// Review
// It's time to review! These examples are all taken from lessons that you've finished. Revisiting them makes sure that you haven't forgotten anything.

// Type in what each expression will evaluate to. For example, for the prompt 1 + 1, you would type 2.

 
const undefineds = [undefined, undefined, undefined];
undefineds.map(x => 'a');
Result: 
undefined 
// Your next review of this code example will be in 6 hours. You may want to revisit the Empty slots lesson. (Your review progress has already been saved.)
//  Show Author's Answer

const array = [];
array[100] = 'some value';
1 in array;
Result: 
false 
Review progress as of today :
Learn

// This code example came from the Empty slots lesson.


0 in new Array(5);
Result: 
false 

// Review progress as of today :
// Learn

// This code example came from the Empty slots lesson.

0 in new Array(200).fill(true);
Result: 
true 
Review progress as of today :
Learn

// This code example came from the Empty slots lesson.

const values = new Array(10);
values[1] = 'some value';
values[2] = 'another value';

let valuesCounted = 0;
values.forEach(x => {
  valuesCounted += 1;
});
valuesCounted;
Result: 
2 