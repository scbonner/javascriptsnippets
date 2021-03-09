
// Type in what each expression will evaluate to. For example, for the prompt 1 + 1, you would type 2.


const nums = [1, 2, 3];
nums.map(num => num * 10);
nums[0];
Result: 
1 


// This code example came from the Map lesson.

[1, 2, 3].map(num => num * 10);
Result: 
[10, 20, 30] 


// This code example came from the Map lesson.


[10, 20].slice(-100);
Result: 
[10, 20] 

// This code example came from the Slice with negative arguments lesson.

[10, 20, 30, 40, 50].slice(-3, -1);
Result: 
[30, 40] 

// This code example came from the Slice with negative arguments lesson.


['a', 'b', 'a', 'b'].findIndex(string => string === 'a');
Result: 
0 

// This code example came from the Find index lesson.

['a', 'b', 'c'].findIndex(element => element === 'd');
Result: 
-1 