function fibonacci(seriesLength) {

// Invariant: The first seriesLength - 1 elements of 
// the Fibonacci series are stored sequentially in the array
// fibonacci(seriesLength - 1).  (This is not true for
// the special case where seriesLength == 2.  For 
// each value of seriesLength for which there is a 
// recursive function call and for seriesLength = 1, 
// however, the invariant holds.)

array = []

if (seriesLength == 1) {
  array = [1];
  return array;
}

else if (seriesLength == 2) {
  array = [1,1];
  return array;
}

else {
  array = fibonacci(seriesLength - 1);
  a = array[seriesLength - 2]; // f(i - 1)
  b = array[seriesLength - 3]; // f(i - 2)
  c = a + b;               // f(i) = f(i - 1) + f(i - 2)
  array.push(c);
  return array;
}
}

// Tests
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(7));
console.log(fibonacci(10));
