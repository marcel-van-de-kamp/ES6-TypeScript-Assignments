/**
 * Starting with the ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.
 */
 
 ////--> Import the Animal, IAnimal and AnimalKind from modules-export.ts
 ////--> Create a new Animal, explicitly type the resulting variable as a IAnimal and call canSeeInTheDark.
 import { Animal, IAnimal, AnimalKind } from './modules-export';
 
 var animal: IAnimal = new Animal('marcel', AnimalKind.cat);
 console.log(animal.canSeeInTheDark());