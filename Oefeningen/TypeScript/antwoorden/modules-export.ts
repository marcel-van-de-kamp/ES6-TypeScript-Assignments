/**
 * Starting with the ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.
 * 
 * https://www.typescriptlang.org/docs/handbook/modules.html
 */
 
 enum AnimalKind {
    cat = 2,
    bird = 4,
    dog = 6
}

 interface IAnimal {
    name: string;
    animalKind: AnimalKind;
    canSeeInTheDark: () => boolean;
}

class Animal implements IAnimal {

    constructor(public name: string, public animalKind: AnimalKind) { }

    canSeeInTheDark(): boolean {
        return this.animalKind === AnimalKind.cat;
    }
}

////--> Above are a TypeScript enum, interface and class. Use a named export statement to export all at once.
export { IAnimal, Animal, AnimalKind }