/**
 * Lexical/static 'bound' this object with arrow functions.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * http://exploringjs.com/es6/ch_arrow-functions.html
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
    
     
     ////--> print the first number with the console.log function
    
     
     ////--> Call the global setInterval function and supply an arrow function as callback
     ////--> that increments the number and logs it to the console
    
  }
}

////--> Execute the counter2 instead of the counter1 function
counterContext.counter1();