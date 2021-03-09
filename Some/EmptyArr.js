

// some always returns false for an empty array. This might seem strange, but it makes some sense.

// "Are some of these people named Amir?" If we ask that about a person named Amir, the answer is yes. If we ask about a person named Betty, the answer is no. If we ask it about no people at all, the answer is no; there's no Amir.


[].some(user => user.name === 'Amir');
Result: 
false 