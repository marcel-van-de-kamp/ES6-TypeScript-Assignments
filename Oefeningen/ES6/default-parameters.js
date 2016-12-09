/**
 * Default parameters
 * 
 * In JavaScript, every function can be called with an arbitrary number of parameters.
 * Default parameters allow formal parameters to be initialized with default values
 * if no value or undefined is passed.
 *  
 * https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
 
 function defaultValuesES5(x, y, z) {
    if (y === undefined) { y = 5; }
    if (z === undefined) { z = 10; }
    return x + y + z;
 }
 var result = defaultValuesES5(5);
 console.log(result);
 
 ////--> Rewrite the function with ES6 default values for y and z
 function defaultValuesES6() {
   
 }
 ////--> Call defaultValuesES6 with only the x parameter and print the result