This quiz includes topics from this lesson: "Map". If you find this quiz difficult, revisiting that lesson may help!
Use map to write a function that squares every number in a list.

>
square([0, 0, 0]);
Expected: [0, 0, 0] OK!
>
square([1, 2, 3]);
Expected: [1, 4, 9] OK!
>
square([8, 12, 4]);
Expected: [64, 144, 16] OK!
>
square([]);
Expected: [] OK!
>
// You must use map.
square.toString().includes('map');
Expected: true OK!
5 tests, 0 failures


const square = (nums) => {
 return nums.map(num => num * num 
  )
}

//    or Author's Answer

function square(nums) {
    return nums.map(n => n * n);
  }