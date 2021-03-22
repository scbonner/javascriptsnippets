// JavaScript Arrays: New and fill
// The fill method fills an array with a given value. Any existing values will be overwritten by that value.

//The fill method overrides old elements with new value.

const happy = ['smile', 'joy', 'sunlight']
happy.fill('sunshine');
Result:
['sunshine', 'sunshine', 'sunshine']

const a = [1, 2];
a.fill(3);
Result: 
[3, 3] 


const b  ['Hary', 'Larry', 'Sally'];
b.fill('Wayne');
Result:  ['Wayne', 'Wayne', 'Wayne']

const a = ['a', 'b', 'c'];
a.fill('z');
Return
['z', 'z', 'z']

const abc = [1, 2, 4, 5, 6]
abc.fill('c');
Result:
['c', 'c', 'c', 'c', 'c']
or 

a.fill('d');
Result: 
['d', 'd', 'd', 'd', 'd'] 

// What if we don't know how many "d"s we need in advance? First, we can create an array of a given size.


const size = 10;
new Array(size).length;
Result:
10


const size = 5;
new Array(size).length;
Result:
5

const size = 6;
new Array(size).length;
Result:
6

const size = 1 + 2;
new Array(size).length;
Result: 
3 

const size = 3 + 2;
new Array(size).length;
5

const size = 8
new Array(size).length;
8

const size = 8 - 3;
new Array(size).length;
5

// There's nothing in an array created in this way. If we ask for its elements, we'll get undefined.


const size = 1 + 2;
new Array(size)[0];
Result: 
undefined 

// We can fill this pre-sized array with values. This is a common reason to do new Array(size): to immediately fill it.


const size = 1 + 2;
new Array(size).fill('d');
Result: 
['d', 'd', 'd'] 


// Now we can create a dynamically-sized filled array.

function fillDynamically(size) {
  return new Array(size).fill('d');
}
fillDynamically(2);
Result: 
['d', 'd'] 

function fillDynamically(size) { 
  return new Array(size).fill('d');
}

fillDynamically(3);
Result
['d', 'd', 'd']

function fillDynamically(size) {
  return new Array(size).fill('a');
}
fillDynamically(4);
Result:
['a', 'a', 'a', 'a']
// The progress bar at the top of this lesson is made of many divs. We know how many code examples exist in the lesson. We create that many divs to make up the progress bar. This is done using the new Array(...).fill(...) method shown here!

