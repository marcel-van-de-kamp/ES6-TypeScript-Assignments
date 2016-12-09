/**
* Scoping with the var, let and const keywords.
* 
* JavaScript: function-level scoping: variables declared with var are scoped within the entire function
* C / Java / C#: block-level scoping: methods, if statements, switches, etc. will create a new scope.
* JavaScript: block-level scoping: variables declared with let or const are scoped within the block.
* 
* http://wesbos.com/let-vs-const/
*/

function functionLevel() {
  var price = 'Hertog Jan';
  var points = 50;
  var winner = false;
  
  if(points > 40) {
    var winner = true;
  }
  
  var price = 'Grolsch';
  
  console.log(winner);
  console.log(price);
}
functionLevel();


////--> Rewrite the above function with the let and const keywords
function blockLevel() {
  ////--> Make sure the price can only be defined once with the const keyword.
  
  
  ////--> Use the let keyword to define the winner and points variables
  
  
  ///---> Redefine the winner with the let keyword in an if(points > 40) block(-scope)
  
  
  ////--> Try to redefine or update the price here
  
  
  ////--> do we have a winner you think? Log the price and winner variables to see.
  
}
blockLevel();