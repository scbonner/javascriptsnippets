// Write a function at(arr, i) that returns the element at 
// index i. It should return null if given an index not in the array.

function at(arr, i) {
  return[i];
}


function at(arr, i) {
    return arr[i].
}

function at(arr, i) {
  return arr[i];
}


// function at([0, 0, 0], 0);
// Expected: 0 OK!

// function add(a, b) { 
//     return a+b 
//     } 
//    console.log(add(4, 6)) 
    // This quiz includes topics from this lesson: "Basics". If you find this quiz difficult, revisiting that lesson may help!
    // Write a function at(arr, i) that returns the element at index i. It should return null if given an index not in the array.
    
    
    // at([0, 0, 0], 0);
    // Expected: 0 OK!
    // >
    // at([1, 2, 3], 1);
    // Expected: 2 OK!
    // >
    // at([1, 2, 3], 0);
    // Expected: 1 OK!
    // >
    // at(['a'], 0);
    // Expected: 'a' OK!
    // >
    // at([1, 2, 3], 3);
    // Expected: null OK!
    // >
    // at([1, 2, 3], 5);
    // Expected: null OK!
    // >
    // at([], 0);
    // Expected: null OK!
    // >
    // at([], 1);
    // Expected: null OK!
    // >
    // at([1, 2, 3], -1);
    // Expected: null OK!
    // >
    // at([undefined], 0);
    // Expected: undefined OK!
    // 10 tests, 0 failures


    function at(arr, i) {
        if (arr.length <= i || i < 0) {
          return null
        } else {
          return arr[i]
        }
      }

      OR



    function at(arr, i) {
      if (i < 0) {
        return null;
      }
      // one more conditional
      if (i >= arr.length) {
        return null;
      }
      return arr[i];
    }
    
    
// at([1, 2, 3], 1);
// Expected: 2 OK!
// >
// at([1, 2, 3], 0);
// Expected: 1 OK!
// >
// at(['a'], 0);
// Expected: 'a' OK
// >
// at([1, 2, 3], 3);
// Expected: null but got: undefined
// >
// at([1, 2, 3], 5);
// Expected: null but got: undefined
// >
// at([], 0);
// Expected: null but got: undefined
// >
// at([], 1);
// Expected: null but got: undefined
// >
// at([1, 2, 3], -1);
// Expected: null but got: undefined
// >
// at([undefined], 0);
// Expected: undefined OK!
