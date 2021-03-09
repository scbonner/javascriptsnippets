
// The some method decides whether a function is true of any element in an array. For example: "are any of these numbers two?" Or "are any of these strings empty?"


[1, 2, 3].some(num => num === 2);
Result: 
true 
> 
['a', 'bc', 'def'].some(
  string => string.length === 0);
Result: 
false 
