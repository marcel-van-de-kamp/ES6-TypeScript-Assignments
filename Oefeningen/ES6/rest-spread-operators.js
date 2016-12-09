/**
 * Rest parameters and the spread operator
 * 
 * In JavaScript, every function can be called with an arbitrary number of parameters.
 *
 * Rest parameters and the spread operator are essentially each other's opposites:
 * - The spread operator 'expands' an array into its elements.
 * - A rest parameter collects multiple elements and 'condenses' into a single element.
 * 
 * https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Functions/rest_parameters
 * https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Operators/Spread_operator
 */

var arr = [15, 15, 10];
 function calculate(x, y, z) {
   return x + y + z;
 }
 var result = calculate(arr[0], arr[1], arr[2]);
 console.log(result);
 
 ////--> Use the spread operator to call the 'calculate' function 
 ////--> with the elements from 'arr' and print the result.
 
 
 ///////////////////////////////////////////////////////////////////////////////
 function multiply(x, y) {
   var rest = Array.prototype.slice.call(arguments, 2);
   var result = x * y;
   
   for(var i = 0; i < rest.length; i++) {
      result *= rest[i];
   }
   return result;
 }
 var result = multiply(5, 5, 10, 10);
 console.log(result);
 
 ////--> Rewrite the function to use a rest parameter besides x en y
 // Tip! you can use the spread operator to concat the parameters into one array
 function multiply2() {
   
 }
 ////--> Call the multiply2 function with multiple arguments (more then 2)
 