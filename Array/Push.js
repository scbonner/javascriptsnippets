// We can add elements to the end of an array with push.

const a = [1, 2];
a.push(3);
a;  //calling or invoking the variable a
Result: 
[1, 2, 3] 

const b = ['a', 'b', 'c']
b.push('d')
Result:
['a', 'b', 'c', 'd']

const abc = [1, 2]
abc.push(3)
Result:
[1, 2, 3]

const a = [1, 2, 3]
a.push(4)
a;
[1, 2, 3, 4]

// push returns the array's length, including the newly-pushed element.


const a = ['a', 'b'];
a.push('c');
Result: 
3 

 
const a = ['a', 'b', 'c', 'd'];
a.push('e');
Result: 
5 

//pop is the opposite of push. It removes the last element from the array.


const a = [1, 2, 3];
a.pop();
a;
Result: 
[1, 2] 

//pop returns the element that was removed.

3

//Some array methods return a new array. push and pop do not. 
//Instead, they change the array itself each time they're called.


const a = [1, 2, 3];
a.pop();
a.pop();
a;
Result: 
[1] 


const a = [1, 2, 3];
a.pop();
a.push('a');
a;
Result: 
[1, 2, 'a'] 

