// The forEach() method executes a provided function once for each array element.

//Syntax

arr.forEach(callback(currentValue[, index[, array]]) {
    // execute something
  }[, thisArg]);


Parameters
// callback
// Function to execute on each element. It accepts between one and three arguments:

// currentValue
// The current element being processed in the array.
// index Optional

// The index of currentValue in the array.
// array Optional

// The array forEach() was called upon.
// thisArg Optional

// Value to use as this when executing callback.

// Return value
// undefined.

// Description
// forEach() calls a provided callback function once for each element in an array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized. (For sparse arrays, see example below.)

// callback is invoked with three arguments:

// the value of the element
// the index of the element
// the Array object being traversed
// If a thisArg parameter is provided to forEach(), it will be used as callback's this value. The thisArg value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

// The range of elements processed by forEach() is set before the first invocation of callback. Elements which are appended to the array after the call to forEach() begins will not be visited by callback. If existing elements of the array are changed or deleted, their value as passed to callback will be the value at the time forEach() visits them; elements that are deleted before being visited are not visited. If elements that are already visited are removed (e.g. using shift()) during the iteration, later elements will be skipped. (See this example, below.)

// forEach() executes the callback function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.

// forEach() does not mutate the array on which it is called. (However, callback may do so)

// There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.

Early termination may be accomplished with:

A simple for loop
A for...of / for...in loops
Array.prototype.every()
Array.prototype.some()
Array.prototype.find()
Array.prototype.findIndex()

// Array methods: every(), some(), find(), and findIndex() test the array elements with a predicate returning a truthy value to determine if further iteration is required.

// forEach expects a synchronous function forEach does not wait for promises. Kindly make sure you are aware of the implications while using promises(or async functions) as forEach callback.

// Example Code

let ratings = [5, 4, 5];
let sum = 0;

let sumFunction = async function (a, b)
{
  return a + b
}

ratings.forEach(async function(rating) {
  sum = await sumFunction(sum, rating)
})
console.log(sum)
 Naively expected output: 14
 Actual output: 0
// Polyfill
// forEach() was added to the ECMA-262 standard in the 5th edition, and it may not be present in all implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of forEach() in implementations which do not natively support it.

// This algorithm is exactly the one specified in ECMA-262, 5th edition, assuming Object and TypeError have their original values and that fun.call evaluates to the original value of Function.prototype.call().

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: https://es5.github.io/#x15.4.4.18

if (!Array.prototype['forEach']) {

  Array.prototype.forEach = function(callback, thisArg) {

    if (this == null) { throw new TypeError('Array.prototype.forEach called on null or undefined'); }

    var T, k;
    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: https://es5.github.com/#x9.11
    if (typeof callback !== "function") { throw new TypeError(callback + ' is not a function'); }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) { T = thisArg; }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}
Examples
No operation for uninitialized values (sparse arrays)
const arraySparse = [1,3,,7]
let numCallbackRuns = 0

arraySparse.forEach(function(element) {
  console.log(element)
  numCallbackRuns++
})

console.log("numCallbackRuns: ", numCallbackRuns)

// 1
// 3
// 7
// numCallbackRuns: 3
// comment: as you can see the missing value between 3 and 7 didn't invoke callback function.
//Converting a for loop to forEach
const items = ['item1', 'item2', 'item3']
const copyItems = []

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}

// after
items.forEach(function(item){
  copyItems.push(item)
})
// Printing the contents of an array
// Note: In order to display the content of an array in the console, you can use console.table(), which prints a formatted version of the array.

// The following example illustrates an alternative approach, using forEach().

// The following code logs a line for each element in an array:

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element)
}

// Notice that index 2 is skipped, since there is no item at
// that position in the array...
[2, 5, , 9].forEach(logArrayElements)
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
//Using thisArg
//The following (contrived) example updates an object's properties from each entry in the array:

function Counter() {
  this.sum = 0
  this.count = 0
}
Counter.prototype.add = function(array) {
  array.forEach(function countEntry(entry) {
    this.sum += entry
    ++this.count
  }, this)
}

const obj = new Counter()
obj.add([2, 5, 9])
obj.count
// 3
obj.sum
// 16
// Since the thisArg parameter (this) is provided to forEach(), it is passed to callback each time it's invoked. The callback uses it as its this value.

// Note: If passing the callback function used an arrow function expression, the thisArg parameter could be omitted, since all arrow functions lexically bind the this value.

// An object copy function
// The following code creates a copy of a given object.

// There are different ways to create a copy of an object. The following is just one way and is presented to explain how Array.prototype.forEach() works by using ECMAScript 5 Object.* meta property functions.

function copy(obj) {
  const copy = Object.create(Object.getPrototypeOf(obj))
  const propNames = Object.getOwnPropertyNames(obj)

  propNames.forEach(function(name) {
    const desc = Object.getOwnPropertyDescriptor(obj, name)
    Object.defineProperty(copy, name, desc)
  })

  return copy
}

const obj1 = { a: 1, b: 2 }
const obj2 = copy(obj1) // obj2 looks like obj1 now
Modifying the array during iteration
The following example logs one, two, four.

When the entry containing the value two is reached, the first entry of the whole array is shifted off—resulting in all remaining entries moving up one position. Because element four is now at an earlier position in the array, three will be skipped.

forEach() does not make a copy of the array before iterating.

let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
  console.log(word)
  if (word === 'two') {
    words.shift() //'one' will delete from array
  }
}) // one // two // four

console.log(words);  //['two', 'three', 'four']

Flatten an array
The following example is only here for learning purpose. If you want to flatten an array using built-in methods you can use Array.prototype.flat().

function flatten(arr) {
  const result = []

  arr.forEach(function(i) {
    if (Array.isArray(i)) {
      result.push(...flatten(i))
    } else {
      result.push(i)
    }
  })

  return result
}

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]

flatten(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]