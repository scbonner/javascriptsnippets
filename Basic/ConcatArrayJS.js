// It's a common task to concatenate multiple arrays into a single one. In JavaScript, there are several different approaches we can take. Some of them mutate the target array; others leave all input arrays unchanged and return a new array instead.

// In this post, I want to compare the following common approaches:

// Appending elements to an existing array with Array.prototype.push()
// Appending elements to a new array with Array.prototype.push()
// Concatenating multiple arrays with Array.prototype.concat()
// Using spread syntax in an array literal
// Let's take a look.

// #Appending Elements to an Existing Array with Array.prototype.push()
// First up, the good old Array.prototype.push() method. Let's assume we have the following two arrays:

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// We can append all elements of array2 to array1 by looping over array2 and calling array1.push() repeatedly:

// for (const element of array2) {
//   array1.push(element);
// }
// Once that code has run, array1 now contains all six values; it has been modified in place. array2, on the other hand, remains unchanged:

// array1; // [1, 2, 3, 4, 5, 6]
// array2; // [4, 5, 6]
// Instead of the for...of loop, we could've passed all elements of array2 as arguments to the push() method call using spread syntax:

// array1.push(...array2);
// This is equivalent to the following method call:

// array1.push(4, 5, 6);
// The result is the same in all cases. array1 now contains all six values, array2 remains unchanged:

// array1; // [1, 2, 3, 4, 5, 6]
// array2; // [4, 5, 6]
// Sometimes, mutating the target array might not be the desired behavior. This is particularly important when you're writing your code in a functional style, composing pure functions that don't have side effects. Those functions should not modify any of their parameters; you therefore shouldn't call the push() method on an array that was passed to the function as a parameter.

// #Appending Elements to a New Array with Array.prototype.push()
// Let's take a look at an approach that uses the push() method without mutating any of the arrays that we want to concatenate. Here are our two input arrays again:

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// Instead of appending the elements of array2 to array1, we can create a new empty array and push the elements of both array1 and array2 into that:

// const concatenated = [];
// concatenated.push(...array1);
// concatenated.push(...array2);
// Here's what the three arrays look like after the above code has finished executing:

// array1; // [1, 2, 3]
// array2; // [4, 5, 6]
// concatenated; // [1, 2, 3, 4, 5, 6]
// The push() is still a mutating method, but in this case, it only mutated concatenated, leaving array1 and array2 unchanged. This approach is fine even within a pure function that takes array1 and array2 as parameters. As long as the function is returning the same value when given the same parameters and it doesn't have any side effects (such as modifying its parameters), it is still considered a pure function, even if we locally use mutation within the function body.

// #Concatenating Multiple Arrays with Array.prototype.concat()
// Now that we've seen how to work with the Array.prototype.push() method, which mutates the target array, let's take a look at Array.prototype.concat(), a non-mutating method. We'll start out with the same two arrays again:

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// We'll then call the concat() method on array1, passing array2 as a parameter:

// const concatenated = array1.concat(array2);
// Since the concat() method is non-mutating, it neither modifies array1 nor array2. Instead, it returns a new array that contains all elements of array1 and array2 concatenated together:

// array1; // [1, 2, 3]
// array2; // [4, 5, 6]
// concatenated; // [1, 2, 3, 4, 5, 6]
// Just like the push() method, the concat() method accepts arbitrarily many arguments. That's useful if you want to concatenate three or more arrays together:

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];
// const concatenated = array1.concat(array2, array3);
// And just like before, all input arrays remain unchanged:

// array1; // [1, 2, 3]
// array2; // [4, 5, 6]
// array3; // [7, 8, 9]
// concatenated; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Sometimes, you might not know upfront how many arrays you want to concatenate. Let's say we have an array of arrays that we want to concatenate into a single one:

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];
// const arrays = [array1, array2, array3];
// Using spread syntax again, we can spread all elements of arrays as arguments into the concat() method call:

// const concatenated = [].concat(...arrays);
// Notice that we're creating an empty array here so that we can call the concat() method on it. Since it doesn't contain any elements, the empty array doesn't change the resulting concatenated array. And as before, all input arrays remain unchanged:

// array1; // [1, 2, 3]
// array2; // [4, 5, 6]
// array3; // [7, 8, 9]
// arrays; // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// concatenated; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Note that the concat() method doesn't recursively flatten arrays. It concatenates all elements in all of its arrays without unwrapping nested arrays:

// const array1 = [1, [2], 3];
// const array2 = [4, [5, [6]]]
// const concatenated = array1.concat(array2);
// The resulting concatenated array contains the three elements of array1, followed by the two elements of array2, totaling five elements:

// concatenated; // [1, [2], 3, 4, [5, [6]]]
// concatenated.length; // 5
// #Using Spread Syntax in an Array Literal
// Lastly, let's look at spread syntax in array literals. Just like before, we'll assume we have two input arrays that we want to concatenate:

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// Using spread syntax in an array literal, we can create a new array that contains all elements of array1, followed by all elements of array2:

// const concatenated = [...array1, ...array2];
// And once again, we can see that neither array1 nor array2 has been modified:

// array1; // [1, 2, 3]
// array2; // [4, 5, 6]
// concatenated; // [1, 2, 3, 4, 5, 6]
// The great thing about spread syntax is that it invokes the iteration protocol of the element that we're spreading. This means that spreading works with any iterable, rather than only with arrays. For example, we could spread all values in a Set into a new array:

// const uniques = new Set([1, 2, 2, 3, 3, 3]);
// const array = [...uniques];

// uniques; // Set (3) {1, 2, 3}
// array; // [1, 2, 3]
// This is really useful when you want to concatenate several arrays into a single one while removing duplicate values:

// const array1 = [1, 2, 3];
// const array2 = [2, 3, 4];
// const uniques = [...new Set([...array1, ...array2])];
// We're concatenating array1 and array2 into a new array that contains all six elements: [1, 2, 3, 2, 3, 4]. That new array is passed to the Set constructor. Set can't contain duplicate values, so when we spread the set into the outer new array, we end up with four unique values:

// array1; // [1, 2, 3]
// array2; // [2, 3, 4]
// uniques; // [1, 2, 3, 4]
// #Summary
// We've seen different approaches to concatenate multiple arrays into a single one:

// Using the Array.prototype.push() method
// Using the Array.prototype.concat() method
// Using spread syntax in array literals
// Most importantly, you should remember that the push() mutates the target array, modifying it in place. The concat() method and spread syntax in array literals, on the other hand, are non-mutating; both approaches create a new array instead.