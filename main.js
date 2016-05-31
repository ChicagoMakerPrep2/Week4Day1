Exercises
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}
// Basic Requirements

// The factorial function can be written using reduce; and furthermore, this 
// is a case where the initial value can be omitted. Write factorial using our 
// updated version of reduce and omit the third argument.

// Use the updated version of reduce to write a function max that computes 
// the maximum number in an array of numbers. Be sure to not include the third 
// argument (the starting point).

// The range function that we've explored so far looks like this:

function range(start, end) {
  var acc = [];
  for (var i = start; i < end; i++) {
    acc.push(i);
  }
  return acc;
}

// Modify range so that the end parameter is optional, and in the event 
// that it is not supplied, range computes a range from 0 to start.

