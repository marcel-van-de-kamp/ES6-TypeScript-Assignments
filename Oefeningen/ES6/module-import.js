/**
 * JavaScript has had modules for a long time. 
 * However, they were implemented via libraries, not built into the language. 
 * ES6 is the first time that JavaScript has built-in modules.
 * ES6 modules are stored in files. There is exactly one module per file and one file per module.
 * 
 * You have two ways of exporting things from a module: 
 * - Multiple named exports 
 * - or a single 'default' export.
 * 
 * And multiple ways of importing, including named imports.
 * 
 * http://exploringjs.com/es6/ch_modules.html
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 */

////--> use a named import statement to import the dog and rabbit class from '0/module-export.js'
import { Rabbit, Dog } from './module-export.js';

var dog = new Dog();
class MyClass {
  
  constructor() {
    ////--> create a new dog and rabbit instance (supply a name as parameter)
    ////--> and store the objects on the 'this' object
    ////--> create a new dog and rabbit instance and store them on the 'this' object
    this.rabbit = new Rabbit('Marcel');
    this.dog = new Dog('Mark');
   
  }
  
  myFunction() {
    this.rabbit.jump();
    this.dog.bark();
  }  
}

////--> create an new instance of 'MyClass' and call myFunction