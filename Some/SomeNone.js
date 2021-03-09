

// We have ways to say "some objects..." and "every object..." We might expect none to mean "no objects have this property". However, there is no none in JavaScript. Fortunately, we can fake it by negating some.


!['a', 'bc', 'def'].some(string => string.length === 0);
Result: 
true 

// We can define our own none if we like. It's a bit easier to think about none than ![...].some.


function none(array, callback) {
  return !array.some(callback);
}
none(['a', 'bc', 'def'], string => string.length === 0);
Result: 
true 