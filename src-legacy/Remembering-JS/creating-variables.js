/* eslint-disable no-undef */
/* var creates a variable in javascript
 let also for a new var, if you want a variable that is really variable
 const Something which you only assign once and never chance

The main difference is in the scope, while var is hoisted and initialized as undefined, before the code is run.
while var is function scoped, immediate function body, let variables are scoped to the immediate enclosing block {} 
In this course, var won't be used, const will be mainly used */

var myName = 'Caio';
console.log(myName);

myName = 'Manu';
console.log(myName);

