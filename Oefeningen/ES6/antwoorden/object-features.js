/**
 * - (nearly) everything in JavaScript is an Object, except the primitives string, number, boolean and undefined
 * - An Object is a hashmap with key value pairs
 *  - the key of an Object is always a string
 *  - the value can be anything, including strings, number, booleans, functions, arrays or objects
 * 
 * https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 */
 
//Ignore this statement for now
Object.prototype.gender = 'male';


//This is a JavaScript object literal, with properties
var obj = {
  name: 'marcel',
  age: 28,
  birthday: new Date('02-11-1988')
};

////--> Iterate over the properties of 'obj' with a for..in loop
////--> and use the count variable to keep track of how many properties it has.
var count = 0;
for(var prop in obj) {
  count++;
}

////--> Print the value of count with the console.log function
console.log(count);


/**
 * I bet the value of count is not what you expected.
 * Every object has something called a PROTOTYPE. which it 'inherits' properties and methods from 
 * and are (technically) part of the object. 
 */
////--> Wrap the count incrementation in a if block and check if the property only belongs
////--> to the object itself by checking with the obj.hasOwnProperty(property) function.
var count = 0;
for(var prop in obj) {
  if(obj.hasOwnProperty(prop)){
    count++;
  }
}

////--> Print the value of count with the console.log function
console.log(count);