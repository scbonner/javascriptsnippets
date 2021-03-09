

const a = ['a', 'b', 'c'];
const origIndex = a.indexOf('c');
a.shift();
const newIndex = a.indexOf('c');
origIndex + ' becomes ' +  newIndex;


var arr = [ 'a', 'b', 'c', 'd', 'e'];
var arr2 = arr.slice(0,1).concat( ['d'] ).concat( arr.slice(2,4) ).concat( arr.slice(4) );
arr.slice(0,1) gives you ['a']
arr.slice(2,4) gives you ['b', 'c']
arr.slice(4) gives you ['e']


const a = ['a', 'b', 'c'];
const origIndex = a.indexOf('c');
// ['a', 'b', 2]
a.shift();
//[2, 'a', 'b']
const newIndex = a.indexOf('c');
origIndex + ' becomes ' +  newIndex;
//['a', 'b', 2] + [2, 'a', 'b']