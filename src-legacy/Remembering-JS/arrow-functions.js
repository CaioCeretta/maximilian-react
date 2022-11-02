function myFnc() {
  // Regular Function
}

const myFunc = () => {
  /// Arrow function
}

/* The main difference with the keyword 'this', is that it , many times, don't always refer to what you were expecting
it to refer to, when you use 'this' inside an arrow function it will always keep it context and not change it, in run
time */

// function printMyName(name) {
//   console.log(name)
// }

// printMyName('Jorge'); // WIll print 'Jorge'

const printMyName = (name) => {
  console.log(name);
}

printMyName('Jorge'); // Will also print 'Jorge'

//In cases where the function has only one parameter, you can omit the parentheses, and if 
  // you have only one line of code, you can also omit the curly brackets and the return keyword

const multiply = number => number * 2;

console.log(multiply(2))