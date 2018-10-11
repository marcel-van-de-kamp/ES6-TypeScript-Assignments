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
let someString: string = 'I am a string';
let someNumber: number = 1;
let someDate: Date = new Date('02-11-1988');
let someObject: Object = { };
let someFunction: () => void = function () { };
let someFunctionWithReturnType: () => boolean = function() { return true; }
let someFunctionWithParams: (myString: string) => void = function(myString) { }
let someArrayOfStrings: string[] = ['one', 'two'];
let someArrayOfStrings: Array<string> = new Array<string>();

////--> Add the correct explicit typings to the function parameters and function return type.
function canSeeInTheDark(name: string, age: number): boolean {
  
  if(age > 20) {
    return false;
  }
  
 //Note: TypeScript uses type inference when type of a return value is not explicitly provided.
  return name === 'cat' ? true : false;
}
