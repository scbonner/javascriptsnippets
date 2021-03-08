
"Count"
Let's write some code. You can solve this problem using only what you've learned in this course so far. If you need a reminder, there's a cheat sheet for all of the lessons that you've finished at the bottom-right of the page.

Each test below shows some code and its result. Your goal is to get each test's actual result to match the expected result.

Edit the code below until all tests pass. If you get stuck, try getting each test to pass individually.

This quiz includes topics from this lesson: "For each". If you find this quiz difficult, revisiting that lesson may help!
Use forEach to write a function count(arr, callback). It should return the number of elements for which callback is true.

>
count([1, 2, 3, 4], (e) => e === 3);
Expected: 1 OK!
>
count([1, 2, 3, 4], (e) => e > 1);
Expected: 3 OK!
>
count([2, 1, 4, 5, 2, 8], (e) => e === 2);
Expected: 2 OK!
>
count(['a', 'b'], (e) => e === 'd');
Expected: 0 OK!
>
count([], (e) => e === 'd');
Expected: 0 OK!
>
// You must use forEach.
count.toString().includes('forEach');
Expected: true OK!
6 tests, 0 failures
function count(arr, callback) {
  let count = 0;
  arr.forEach((e) => {
    if (callback(e)) {
      count += 1;
    }
  });
  return count;
}



// Count quiz 
// Use forEach to write a function count(arr, callback). 
//It should return the nuumber of elements for which callback is true

// steps 
// 1. Declare a variable num_of_elements and initialize it to 0 
// 2. loop through the array using forEach
// 3. use an if condition to check if callback(n) is true. if true do num_of_elements += 1 
//4. return num_of_elements

//Author's answer

function count(arr, callback) {
    let count = 0;
    arr.forEach((e) => {
      if (callback(e)) {
        count += 1;
      }
    });
    return count;
  }

  
  //OR



function count(arr, callback){
    let num_of_elements = 0 
    arr.forEach(n => {
      if(callback(n)){
        num_of_elements += 1
      }
    })
    return num_of_elements
  
  }
  
  console.log(count([1, 2, 3, 4], (e) => e === 3))
  
   
  
  
  console.log(count([1, 2, 3, 4], (e) => e > 1));
  
  // count([2, 1, 4, 5, 2, 8], (e) => e === 2); 
  
  console.log(count([], (e) => e === "d"));
  