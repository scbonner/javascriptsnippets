// Review
// It's time to review! These examples are all taken from lessons that you've finished. Revisiting them makes sure that you haven't forgotten anything.

// Type in what each expression will evaluate to. For example, for the prompt 1 + 1, you would type 2.


['a', 'b', 'a', 'b'].findIndex(string => string === 'a');
Result: 
0 

[1, 2, 3, 3, 4].findIndex(num => num === 3);

Result: 
2

// This code example came from the Find index lesson.

const arr = ['a', 'b', 'c'];
arr['five'] = 5;
arr.length;
Result: 
3 

// This code example came from the Arrays are objects lesson.


const nums = [1, 2, 3];
nums.map(num => num * 10);
nums[0]; //retrieve index 0
Result: 
1 

// This code example came from the Map lesson.
 
typeof [];
Result: 
'object' 


// This code example came from the Arrays are objects lesson.

['a', 'b', 'c'].findIndex(element => element === 'd');
Result: 
-1 


//This code example came from the Find index lesson.

[1, 2, 3].some(num => num === 2);
Result: 
true 


// This code example came from the Some and every lesson.

[].every(user => user.name === 'Amir');
Result: 
true 


// This code example came from the Some and every lesson.

const a = ['a', 'b'];
a.unshift('z');
a;
Result: 
['z', 'a', 'b'] 

// This code example came from the Shift lesson.

['a', 'bc', 'def'].every(string => string.length > 0);
Result: 
true 

// This code example came from the Some and every lesson.


[1, 2, 3].map(num => num * 10);
Result: 
[10, 20, 30] 

// This code example came from the Map lesson.


[].some(user => user.name === 'Amir');
Result: 
false 

// This code example came from the Some and every lesson.

const a = ['a', 'b'];
a.shift();
a;
Result: 
['b'] 

// This code example came from the Shift lesson.