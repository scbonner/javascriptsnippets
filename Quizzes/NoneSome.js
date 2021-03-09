
// Each test below shows some code and its result. Your goal is to get each test's actual result to match the expected result.

// Edit the code below until all tests pass. If you get stuck, try getting each test to pass individually.

// This quiz includes topics from this lesson: "Some and every". If you find this quiz difficult, revisiting that lesson may help!
// Write a function none(arr, callback). It should return true if the callback returns false for every element.


none([1, 2, 4], n => n === 3);
Expected: true OK!

none([1, 2], n => n === 2);
Expected: false OK!

none(['a', 'bc', 'def'], s => s.length === 0);
Expected: true OK!

none([], s => false);
Expected: true OK!

none([], s => true);
Expected: true OK!

// You must use some.
none.toString().includes('some');
Expected: true OK!

//6 tests, 0 failures

function none(array, callback) {
  return !array.some(callback);
}
none(['a', 'bc', 'def'], string => string.length === 0);

//  OR Author's Answer

function none(arr, callback) {
    return !arr.some(callback);
  }