/**
 * One of TypeScript’s core principles is that type-checking focuses on the shape that values have. 
 * This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, 
 * interfaces fill the role of naming these types, and are a powerful way of defining contracts within 
 * your code as well as contracts with code outside of your project.
 * 
 * https://www.typescriptlang.org/docs/handbook/interfaces.html
 */

class Animal {
  
    constructor(name, animalKind) {
      this.name = name;
      this.animalKind = animalKind;
    }

    canSeeInTheDark() {
        return this.animalKind === 'cat';
    }
}

////--> Above class Animal is an ES6 class. Create a TypeScript interface 'IAnimal' for it by:
////--> - Declaring an interface
////--> - Adding a string property 'name' to the interface
////--> - Adding a property 'animalKind' of type AnimalKind to the interface.
////--> - Adding a function 'canSeeInTheDark' to the interface that returns a boolean.




////--> Let the class implement the interface and convert the class to a full TypeScript class.
