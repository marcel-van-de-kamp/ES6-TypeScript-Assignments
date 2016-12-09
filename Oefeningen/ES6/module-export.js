"use babel";

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
 * And multiple ways of importing, including named imports
 * 
 * http://exploringjs.com/es6/ch_modules.html
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 */

////--> export the Rabbit class as a named export
export class Rabbit {
  
  constructor(name) {
    this.name = name;
  }
  
  jump() {
    console.log(`${this.name} jumps high!`);
  }  
}

////--> export the Dog class as a named export
export class Dog {
  
  constructor(name) {
    this.name = name;
  }
  
  bark() {
    console.log(`${this.name} barks loud!`);
  }
}



