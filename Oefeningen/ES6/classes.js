/**
 * ES6 classes are syntactical sugar over the Objects and prototypes.
 * They offer a much nicer, cleaner and clearer syntax for creating 
 * objects and dealing with inheritance.
 * 
 * In JavaScript, any function can return a new object.
 * When it’s not a constructor function or class, it’s called a factory function.
 * Each of these strategies stores methods on a shared prototype, 
 * and optionally supports private data via constructor function closures. 
 * In other words, they have mostly the same features, and could mostly be used interchangeably.
 */

//ES5 constructor function example
function Animal(name, animalKind) {
  this.name = name;
  this.animalKind = animalKind;
  
  this.canSeeInTheDark = animalKind === 'cat';
  
  Animal.prototype.see = function() {
    if (this.canSeeInTheDark) {
      return this.name + ' is seeing in the dark...';
    } else {
      return this.animalKind + "s can't see in the dark.";
    }
  }  
}
var animal1 = new Animal('Mark', 'cat');
var animal2 = new Animal('Marcel', 'dog');
console.log(animal1.see());
console.log(animal2.see());


////--> Write an ES6 'AnimalClass' class can be used to create an Animal object.
////--> Use the class to create an Animal and execute its see function.





