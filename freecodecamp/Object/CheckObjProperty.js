// Check if an Object has a Property
// Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword. If we have an object users with a property of Alan, we could check for its presence in either of the following ways:

users.hasOwnProperty('Alan');
'Alan' in users;


Both of these would return true.

// We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.


//Solution 1

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
    // Only change code below this line
    if (
      obj.hasOwnProperty("Alan") &&
      obj.hasOwnProperty("Jeff") &&
      obj.hasOwnProperty("Sarah") &&
      obj.hasOwnProperty("Ryan")
    ) {
      return true;
    }
    return false;
  
  
  
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));

//Code Explanation
// Checks whether object contains all users by using the hasOwnProperty method for each name with the && operator to return a true or false value.


  //Second solution

  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      obj.hasOwnProperty(name)
    );
  }
//   Code Explanation
//   Uses an array with all of the names which should be present in the object.
//   The every method is used to validate all of names used in conjunction with the hasOwnProperty method result in a value of true being returned during each iteration.
//   If at least one name is not found using the hasOwnProperty method, the every method returns false.