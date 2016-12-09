/**
 * A major part of software engineering is building components that not only 
 * have well-defined and consistent APIs, but are also reusable. 
 * 
 * In languages like C# and Java, one of the main tools in the toolbox for creating 
 * reusable components is generics, that is, being able to create a component that can 
 * work over a variety of types rather than a single one. This allows users to 
 * consume these components and use their own types.
 * 
 * https://www.typescriptlang.org/docs/handbook/generics.html
 */

let someArrayOfStrings: string[] = ['one', 'two'];
////--> Rewrite above array variable and use the generic Array API. 
let someArrayOfStrings: Array<string> = new Array<string>();


////////////////////////////////////////////////////////////////////////////////
class NotGeneric {
  private arr: any[] = [];
  
  //store an element in the array and return the updated array
  store(element: any): any[] {
    if(this.arr.indexOf(element) === -1) {
        this.arr.push(element);
    }
    
    return this.arr;
  }
}

////--> Above class should always store objects of one type at a time.
////--> Rewrite the class to 'IsGeneric', and use generics to force this behavior.

////--> create a new instance of the class with type parameter 'string' and try to store different elements