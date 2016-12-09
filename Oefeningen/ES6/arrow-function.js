/**
 * Arrow functions.
 * 
 * Arrow functions make our code more concise, and simplify function scoping and the this keyword. 
 * They are one-line mini functions which work much like Lambdas in other languages like C# or Python. 
 * By using arrow function we avoid having to type the function keyword, 
 * return keyword (it’s implicit in arrow functions), and curly brackets.
 * 
 * https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
 */

var multiply = function() { 
  return 5 * 5;
}
console.log(multiply());

////--> Rewrite the above function expression into a shorthand ES6 arrow function

var multiply2 = function(x) { 
  return x * 5;
}
console.log(multiply2(5));

////--> Rewrite the above function expression into a ES6 arrow function

var multiply3 = function(x, y) {
  var result = x * y;
  console.log(result);
}
multiply3(5, 5);

////--> Rewrite the above function expression into a ES6 arrow function
