const number = 1;
const num2 = number;

console.log(num2);

//In this case, the value will be copied

/* Object and arrays have the reference copied. */
/* It will print the same value in both cases, but it will not actually have copied the person, instead the object
person is stored in the memory, and the secondPerson copied the reference in the memory of the person object*/

const person = {
  name: 'Jorge'
};

const secondPerson = person

console.log(secondPerson);

/* It will print the same value in both cases, but it will not actually have copied the person, instead the object
person is stored in the memory, and the secondPerson copied the reference in the memory of the person object*/


/* We can see that this is the case if we changed person.name after it was copied */

person.name = 'Jorge2';

console.log(secondPerson);

/* The value remains the same, after only changing the first object, only the pointer in the memory is copied, the
same happens in arrays*/

const thirdPerson = {
  ...person
}

//In the above way we are copying the person object value, not copying it and creating a new variable

console.log(thirdPerson.name);
thirdPerson.name = 'Kleber';
console.log(person, secondPerson, thirdPerson);