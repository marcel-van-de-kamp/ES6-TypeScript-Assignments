/**
 * Blowing your mind with JavaScript objects.
 * 
 * 
 * - (nearly) everything in JavaScript is an Object, except the primitives string, number, boolean and undefined
 * - An Object is a hashmap with key value pairs
 *  - the key of an Object is always a string
 *  - the value can be anything, including strings, number, booleans, functions, arrays or objects
 * 
 * https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 */
 
//Ignore this statement for now
Object.prototype.gender = 'male';


//Below a JavaScript object literal, with properties
var obj = {
  name: 'Marcel',
  age: 28,
  birthday: new Date('02-11-1988')
};

////--> Iterate over the properties of 'obj' with a for..in loop
////--> and use the count variable to keep track of how many properties it has.
var count = 0;

////--> Print the value of count with the console.log function


/**
 * I bet the value of count is not what you expected.
 * Every object has something called a PROTOTYPE. which it 'inherits' properties and methods from 
 * and are (technically) part of the object.
 * 
 * http://www.w3schools.com/js/js_object_prototypes.asp
 */
////--> Wrap the count incrementation in a if block and check if the property only belongs
////--> to the object itself by checking with the obj.hasOwnProperty(property) function.