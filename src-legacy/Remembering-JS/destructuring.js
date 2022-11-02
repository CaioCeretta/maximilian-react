const [a, b] = ['Hello', 'Max'];

//The index 0 of the array will be assigned to the a variable, and so on

console.log(a, b);

const { name } = {name: 'Jorge', age: 28};

console.log(name); // Destructuring the above object will create a new variable name with the name property of the object
// console.log(age); would return undefined

const numbers = [ 1, 2, 3];

const [num1, num2] = numbers;
// this could also be made like so, for getting the third position of the array
const [number1, , number3] = numbers;

console.log(num1, num2)


console.log(number1, number3)

