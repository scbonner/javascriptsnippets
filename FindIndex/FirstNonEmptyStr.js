
// Sometimes, we don't know the complete value of the element that we want. For example, maybe we want to find the first non-empty string. For that, we can use findIndex.


['', 'a'].findIndex(
  string => string.length !== 0
);
Result: 
1 


const users = [
    {name: 'Amir', admin: false},
    {name: 'Betty', admin: true},
  ];
  users.findIndex(user => user.admin === true);
  Result: 
  1 