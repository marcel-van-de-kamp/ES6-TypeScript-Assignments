/**
 * ES6 classes are syntactical sugar over the Objects and prototypes.
 * They simply offer a much nicer, cleaner and clearer syntax for creating these 
 * objects and dealing with inheritance.
 * 
 * Below are two examples of a factory and constructor function.
 * Each of these strategies stores methods on a shared prototype, 
 * and optionally supports private data via constructor function closures. 
 * In other words, they have mostly the same features, 
 * and could mostly be used interchangeably.
 */

//ES5 factory function
// function animalFactory(name, animalKind) {

//   var canSeeInTheDark = animalKind === 'cat';

//   function see() {
//     if (canSeeInTheDark) {
//       console.log(name + ' is using its eyes...');
//     } else {
//       console.log(animalKind + "s can't see in the dark.")
//     }
//   }

//   return {
//     name: name,
//     animalKind: animalKind,
//     see: see
//   };
// }
// var animal = animalFactory('Marcel', 'dog');
// animal.see();


//ES5 constructor function example
function Animal(name, animalKind) {
  this.name = name;
  this.animalKind = animalKind;
  
  this.canSeeInTheDark = animalKind === 'cat';
  
  Animal.prototype.see = function() {
    if (this.canSeeInTheDark) {
      return this.name + ' is using its eyes...';
    } else {
      return this.animalKind + "s can't see in the dark.";
    }
  }  
}
var animal1 = new Animal('Mark', 'cat');
var animal2 = new Animal('Marcel', 'dog');
console.log(animal1.see());
console.log(animal2.see());


////--> Write an ES6 class that will result in the same Animal object
class AnimalClass {
  
  constructor(name, animalKind) {
    this.name = name;
    this.animalKind = animalKind;
    
    this.canSeeInTheDark = animalKind === 'cat';
  }
  
  see() {
     if (this.canSeeInTheDark) {
      return `${this.name} is seeing in the dark...`;
    } else {
      return `${this.animalKind}s can't see in the dark.`;
    }
  }  
}

var animal3 = new AnimalClass('Koos', 'human');
console.log(animal3.see());





