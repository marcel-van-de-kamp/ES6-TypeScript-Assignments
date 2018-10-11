/**
 * Traditional JavaScript focuses on functions and prototype-based inheritance as the basic means 
 * of building up reusable components, but this may feel a bit awkward to programmers more comfortable 
 * with an object-oriented approach, where classes inherit functionality and objects are built from 
 * these classes. Starting with ECMAScript 6, JavaScript programmers will be able to build their 
 * applications using this object-oriented class-based approach.
 * 
 * https://www.typescriptlang.org/docs/handbook/classes.html
 * 
 */

enum AnimalKind { cat = 2, bird = 4, dog = 6 }

////--> Below is an ES6 class. Convert it to a TypeScript class by:
////--> - Adding explicit public access modifiers and parameter typings (use the enum AnimalKind).
////--> - Removing the assignments to 'this' for the supplied parameters.
////--> - Adding a public property declaration for 'canSeeInTheDark'.
////--> - Using the enum 'AnimalKind' in the calculation of 'canSeeInTheDark'.
////--> - Adding a returntype to the see function
class Animal {
  
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

////--> Create an instance of the AnimalClass, call the see method and print its result with console.log





