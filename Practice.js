

// // const a = ['a', 'b', 'c'];
// // const origIndex = a.indexOf('c');
// // //2
// // a.shift();
// // const newIndex = a.indexOf('c');
// // origIndex + ' becomes ' +  newIndex;


// // var arr = [ 'a', 'b', 'c', 'd', 'e'];
// // var arr2 = arr.slice(0,1).concat( ['d'] ).concat( arr.slice(2,4) ).concat( arr.slice(4) );
// // arr.slice(0,1) gives you ['a']
// // arr.slice(2,4) gives you ['b', 'c']
// // arr.slice(4) gives you ['e']


// // const a = ['a', 'b', 'c'];
// // const origIndex = a.indexOf('c');
// // // ['a', 'b', 2]
// // a.shift();
// // //[2, 'a', 'b']
// // const newIndex = a.indexOf('c');
// // origIndex + ' becomes ' +  newIndex;
// // //['a', 'b', 2] + [2, 'a', 'b']


// // const foods = ['peas', 'carrots', 'potatoes'];
// // const joined = [
// //   foods.slice(0, -1).join(', '),
// //   ', and ',
// //   foods[foods.length - 1],
// // ].join('');
// // joined;
// // '[['peas', 'carrots'], and ', 1]]'

// function at(arr) {
//     arr[1] = 0
//     return null
// }

// //adding strings
// let firstName = "Anwar";
// let lastName ="Haq";
// let role = 'developer'

// let msg = firstName + ' ' + lastName + ': '+ role;



function myFunction() {
    var hour = new Date().getHours(); 
    var greeting;
    if (hour < 18) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
  
