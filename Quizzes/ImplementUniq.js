
"Implement uniq"
Let's write some code. You can solve this problem using only what you've learned in this course so far. If you need a reminder, there's a cheat sheet for all of the lessons that you've finished at the bottom-right of the page.

Each test below shows some code and its result. Your goal is to get each test's actual result to match the expected result.

Edit the code below until all tests pass. If you get stuck, try getting each test to pass individually.

This quiz includes topics from these lessons: "For each", "Includes", "Stack". If you find this quiz difficult, revisiting those lessons may help!
Write a function uniq(arr). It should return a new array without any duplicate values. It should not change the original array.

>
uniq([1, 2, 3]);
Expected: [1, 2, 3] OK!
>
uniq(['a', 'a', 'b']);
Expected: ['a', 'b'] OK!
>
uniq([1, 1, 1, 1]);
Expected: [1] OK!
>
const array = [1, 1];
uniq(array);
array.length;
Expected: 2 OK!
>
uniq([]);
Expected: [] OK!
>
// You must use forEach.
uniq.toString().includes('forEach');
Expected: true OK!
>
// You must use includes.
uniq.toString().includes('includes');
Expected: true OK!
>
// You must use a stack function.
const code = uniq.toString();
code.includes('push') || code.includes('pop');
Expected: true OK!
8 tests, 0 failures
function uniq(arr) {
  const newArr = [];
  arr.forEach(n => {
  if (!newArr.includes(n)) {
    newArr.push(n);
  }
  });
  return newArr;
}




Show Author's Answer

function uniq(arr) {
    const newArr = [];
    arr.forEach(e => {
      if (!newArr.includes(e)) {
        newArr.push(e);
      }
    });
    return newArr;
  }
  