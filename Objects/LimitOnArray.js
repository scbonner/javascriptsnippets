
// Extra properties assigned to an array don't change its length.


// Somewhere in our application, we have a teamMembers array. We could store a limit number directly on the array, indicating how many team members are allowed in this account.


const teamMembers = [
  'ebony@example.com',
  'fang@example.com',
];
teamMembers.limit = 3;
teamMembers.length < teamMembers.limit;
Result: 
true 


// This works, but it's not a good idea because it's surprising. 999 out of 1,000 arrays are just arrays. When 1 in 1,000 of them also has extra properties like this, other programmers won't expect it, which can lead them to make mistakes. For example, they might build a new array and pass it to a function, not realizing that the function expects the array to have this unusual limit property.

// It's better to use an object in this case.

const team = {
  members: [
    'ebony@example.com',
    'fang@example.com',
  ],
  memberLimit: 2,
};
team.members.length < team.memberLimit;
Result: 
false 