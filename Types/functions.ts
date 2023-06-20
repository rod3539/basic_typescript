function square(num: number): number {
    return num * num;
}

function greet(person: string = 'stranger'): string {
    return `Hi there, ${person}`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {
    return `
    ${person}, ${age}`
}

function rando(num: number): string | number {
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

const add = (x: number, y: number): number => {
    return x + y;
}

square(3);
console.log(square(3));
doSomething('ChickenFace', 33, true)


const colors = ['red', 'orange', 'yellow'];
colors.map(
    color => {
        return color.toUpperCase();
    }
)

function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
}

function makeError(msg: string): never {
    throw new Error(msg);
}