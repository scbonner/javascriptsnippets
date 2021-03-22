
// "Rotate right"
// Let's write some code. You can solve this problem using only what you've learned in this course so far. If you need a reminder, there's a cheat sheet for all of the lessons that you've finished at the bottom-right of the page.

// Each test below shows some code and its result. Your goal is to get each test's actual result to match the expected result.

// Edit the code below until all tests pass. If you get stuck, try getting each test to pass individually.

// This quiz includes topics from these lessons: "Stack", "Shift". If you find this quiz difficult, revisiting those lessons may help!
// Write a function that rotates an array. The last element moves to the beginning of the array. The function should modify the array itself.

>
const array = [1, 1, 1];
rotate(array);
array;
Expected: [1, 1, 1] OK!
>
const array = [0, 0, 1];
rotate(array);
array;
Expected: [1, 0, 0] OK!
>
const array = [0, 0, 0];
rotate(array);
array;
Expected: [0, 0, 0] OK!
>
const array = [1, 2, 3];
rotate(array);
array;
Expected: [3, 1, 2] OK!
>
const array = [1];
rotate(array);
array;
Expected: [1] OK!
>
const array = [];
rotate(array);
array;
Expected: [] OK!
>
// You must use a stack function.
const code = rotate.toString();
code.includes('pop') || code.includes('push');
Expected: true OK!
>
// You must use a shifting function.
const code = rotate.toString();
code.includes('shift') || code.includes('unshift');
Expected: true OK!
8 tests, 0 failures


function rotate(x) {
 if (x.length == 0) {
  
   return x
 } else {
   let last = x.pop()
   x.unshift(last);
 
   return x
 }
}

//instructor's answer

function rotate(arr) {
    const last = arr.pop();
    if (last !== undefined) {
      arr.unshift(last);
    }
    return arr;
  }

