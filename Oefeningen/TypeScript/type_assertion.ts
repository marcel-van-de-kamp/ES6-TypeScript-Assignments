/**
 * TypeScript allows you to override its inferred and analyzed view of types any way you want to. 
 * This is done by a mechanism called "type assertion". 
 * 
 * With type assertion, you tell the compiler that you know about the types better than it does, 
 * and that it should not second guess you.
 * 
 * https://basarat.gitbooks.io/typescript/content/docs/types/type-assertion.html
 */


let someVarDefinedLater:any;

////--> We didn't known what the type of someVarDefinedLater would be when we declared it.
someVarDefinedLater = 'myString';

////--> But now that we assigned a string to it, WE know it must be a string.
////--> Use type assertion / casting to get the length of the string assigned to someVarDefinedLater.