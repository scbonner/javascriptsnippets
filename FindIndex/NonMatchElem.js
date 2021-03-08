

// If our function doesn't match any elements, findIndex returns -1. This is like indexOf, which returns -1 when nothing is found. As with indexOf, this can be a source of bugs. Remember to check for -1!


['a', 'b', 'c'].findIndex(element => element === 'd');
Result: 
-1 