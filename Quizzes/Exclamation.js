
// This quiz includes topics from this lesson: "Map". If you find this quiz difficult, revisiting that lesson may help!
// Use map to write a function that appends a '!' to every element.


f(['a', 'b', 'c']);
Expected: ['a!', 'b!', 'c!'] OK!
>
f(['A cat']);
Expected: ['A cat!'] OK!
>
f(['A cat', 'And a dog']);
Expected: ['A cat!', 'And a dog!'] OK!
>
f(['']);
Expected: ['!'] OK!
>
f([]);
Expected: [] OK!
>
f.toString().includes('map');
Expected: true OK!
6 tests, 0 failures


function f(strings) {
  return strings.map(e => e + '!') 
}


// Author's Answer


function f(strings) {
    return strings.map((c) => c + '!');
  }
  