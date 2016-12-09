/**
 * In TypeScript, we can use common object-oriented patterns. 
 * Of course, one of the most fundamental patterns in class-based programming 
 * is being able to extend existing classes to create new ones using inheritance.
 * 
 * https://www.typescriptlang.org/docs/handbook/classes.html
 */
 
 enum FurType { long, short }
 enum FeatherColor { black, blue, red }
 
 class Cat {
   private _canSeeInTheDark: boolean = true;
   
   constructor(public name: string, public age: number, public furType: FurType) { }
   
   canSeeInTheDark(): boolean {
     return this._canSeeInTheDark;
   }
 }
 
 class Bird {
   private _canSeeInTheDark: boolean = false;
   
   constructor(public name: string, public age: number, public featherColor: FeatherColor) { }
   
  canSeeInTheDark(): boolean {
     return this._canSeeInTheDark;
   }
 }
 
 
////--> Create a base class 'Animal' with the shared properties of Cat and Bird.
class Animal {
    constructor(public name: string, public age: number, private _canSeeInTheDark: boolean) { }

    canSeeInTheDark(): boolean {
        return this._canSeeInTheDark;
    }
}

////--> Rewrite Cat and Bird so they extend the new Animal class.
class Cat extends Animal {

    constructor(name: string, age: number, public furType: FurType) {
        super(name, age, true);
    }
}

class Bird extends Animal {
    constructor(name: string, age: number, public featherColor: FeatherColor) {
        super(name, age, false);
    }
}

////--> Create a new Cat or Bird and log if it can see in the dark
var cat = new Cat('Kitty', 10, FurType.long);
console.log(cat.canSeeInTheDark());