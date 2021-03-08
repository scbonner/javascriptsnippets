
//Author's answer
function eql(arr1, arr2) {
  let result = arr1.length === arr2.length;
  arr1.forEach((value, i) => {
    if (value !== arr2[i]) {
      result = false;
    }
  });
  return result;
}


//Group answer

function eql(arr1, arr2) {
  let result = arr1.length === arr2.length
  arr1.forEach((item,index) => {
    if(item !== arr2[index]){
      result = false
    }
  })
  return result
  
}