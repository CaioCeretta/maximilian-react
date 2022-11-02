

const numbers = [1, 2, 3];

/*Array methods aren't next gen, they work in the same way, they take a function as an input, and this function is executed
on each element of the array*/

const doubleArray = numbers.map(number => number * 2);

//Map returns a new array

console.log(doubleArray);

/* From here till the end won't be said in this class of the course */

// ForEach - It is a fancier and smaller way of doing the conventional for loop and it also has his own scope

var array = [1,2,3];
for (var i = 0; i < array.length; i++){
  console.log(i);
}

array.forEach(function(i){
  console.log(i);
});

// map - array.map() when you want to transform elements in an array.

// filter - array.filter() when you want to select a subset of multiple elements from an array.

// every - array.every() tests if all the elements pass certain condition

// some - array.some() almost the same as every, but if one element passes the test the inner function will be executed

// reduce - we can create an accumulation of the values, for example array.reduce((accumulator, value) => accumulator + value, initialValue)

// find - array.find() When you want to select a single element from an array.

// findIndex - array.findIndex() returns the first element that satisfies the condition

// slice - array.slice Returns a shallow copy of a portion of an array from (start, end) end not included

/* splice - array.splice changes the contents of an array by removing or replacing existings elements and/or adding
it in the space, to access part of an array without modifying it we should use slice









