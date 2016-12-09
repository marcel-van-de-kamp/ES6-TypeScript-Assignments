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
////--> rewrite the above function expression into a shorthand ES6 arrow function

var multiply2 = function(x) { 
  return x * 5;
}
////--> rewrite the above function expression into a ES6 arrow function

var multiply3 = function(x, y) {
  var result = x * y;
  return result;
}
////--> rewrite the above function expression into a ES6 arrow function


////////////////////////////////////////////////////////////////////////////////

/**
 * Lexical/static 'bound' this object with arrow functions.
 */ 

var counterContext = {
  
  counter1: function () {
      var self = this;
      self.number = 0;
      console.log(self.number);
      
      setInterval(function() {
        self.number++;
        console.log(self.number);
      }, 2000);
   },
  
  /**
   * Write the equivalant of the above function but supply an arrow function
   * as callback to the forEach method and make use of the 'lexical/static bound' this object.
   */
  counter2: function() {
    
     ////--> Set a property 'number' on the 'this' object (counterContext) with value 0
     this.number = 0;
     
     ////--> print the first number with the console.log function
     console.log(self.number);
     
     ////--> Call the global setInterval function and supply an arrow function as callback
     ////--> that increments the number and logs it to the console
     setInterval(() => { 
       this.number++;
       console.log(number);
     }, 
     2000);
  }
}

////--> Execute the counter2 instead of the counter1 function
//counterContext.counter1();
counterContext.counter2();





