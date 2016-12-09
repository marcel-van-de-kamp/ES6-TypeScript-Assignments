/**
 * TypeScripts purpose, the reason it exists, is to add a solid type system on
 * top of ECMAScript 6+. JavaScript is a dynamically typed language. 
 * TypeScript applies a fundamental change to the language and applies 
 * static typing to the code in our applications.
 * 
 * - All JavaScript is also valid TypeScript.
 * - TypeScript opens up a world of possibilities for editors to help with 
 *   design and compile time autocompletion, intellisense and errors.
 * 
 * http://www.typescriptlang.org/docs/tutorial.html
 * https://egghead.io/lessons/typescript-introduction-to-static-typing?course=use-types-effectively-in-typescript
 * https://johnpapa.net/typescriptpost1/
 */

////--> add the correct explicit typings to below variables
////--> Tip: you can use arrow function notation as typing for a function expression 
let someString = 'I am a string';
let someNumber = 1;
let someDate = new Date('02-11-1988');
let someObject = { };
let someArrayOfStrings = ['one', 'two'];
let someFunction = function () { };
let someFunctionWithReturnType = function() { return true; }
let someFunctionWithParams = function(myString) { }

////--> Add the correct explicit typings to the function parameters and function return type.
function canSeeInTheDark(name, age) {
  
  if(age > 20) {
    return false;
  }
  
 //Note: TypeScript uses type inference when type of a return value is not explicitly provided.
  return name === 'cat' ? true : false;
}



