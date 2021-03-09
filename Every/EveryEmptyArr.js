

// every always returns true for an empty array. One way to remember this is that every's behavior for empty lists is the opposite of some's behavior.

[].every(f) is true, no matter what f is.

[].some(f) is false, no matter what f is.


[].every(user => user.name === 'Amir');
Result: 
true 
