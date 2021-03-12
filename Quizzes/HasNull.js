
// "Has null"
// Let's write some code. You can solve this problem using only what you've learned in this course so far. If you need a reminder, there's a cheat sheet for all of the lessons that you've finished at the bottom-right of the page.

// Each test below shows some code and its result. Your goal is to get each test's actual result to match the expected result.

// Edit the code below until all tests pass. If you get stuck, try getting each test to pass individually.

// This quiz includes topics from this lesson: "Some and every". If you find this quiz difficult, revisiting that lesson may help!
// Write a function hasNull that returns true if an array contains null.

// A hint: null == undefined (this is a "double equals" comparison). But null !== undefined (this is a "triple equals" comparison).


hasNull([null, null]);
Expected: true OK!

hasNull([1, null, 3]);
Expected: true OK!

hasNull([1, 2, 3]);
Expected: false OK!

hasNull([]);
Expected: false OK!

hasNull([undefined]);
Expected: false OK!

hasNull(['null']);
Expected: false OK!

// You must use some.
hasNull.toString().includes('some');
Expected: true OK!
//7 tests, 0 failures
function hasNull(arr) {
  return arr.some(arr => arr === null);
}

//  OR Author's Answer

function hasNull(arr) {
    return arr.some(x => x === null);
  }
