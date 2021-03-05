
// We can fix that bug by checking for -1.


const abc = ['a', 'b', 'c'];
function sliceFromElement(array, element) {
  const index = array.indexOf(element);
  if (index === -1) {
    return null;
  } else {
    return array.slice(index);
  }
}
sliceFromElement(abc, 'd');
Result: 
null 