// JavaScript Arrays: New and fill
// The fill method fills an array with a given value. Any existing values will be overwritten by that value.


const a = [1, 2];
a.fill(3);
Result: 
[3, 3] 


const a = ['a', 'b', 'c'];
a.fill('d');
Result: 
['d', 'd', 'd'] 

// What if we don't know how many "d"s we need in advance? First, we can create an array of a given size.


const size = 1 + 2;
new Array(size).length;
Result: 
3 

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


// The progress bar at the top of this lesson is made of many divs. We know how many code examples exist in the lesson. We create that many divs to make up the progress bar. This is done using the new Array(...).fill(...) method shown here!

