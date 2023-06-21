const nums: Array<number> = [];
const colors: Array<number> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;

console.log(inputEl);
inputEl.value = 'hacked';

document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number) {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function identity<T>(item: T): T {
    return item;
}

identity<number>(7);
identity<string>('hello');


function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement<string>(['a', 'b', 'c']));
getRandomElement<number>([5, 6, 21, 3334, 56]);

getRandomElement<string>(['a', 'v', 'asd']);
let x = 23;

function merge<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}

console.log(merge({name: 'colt'}, {pets: ['blue', 'elton']}));
const comboObj = merge({name: 'colt'}, {pets: ['qqqq', 'eeeee']});

interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}

interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = [];
    add(el: T) {
        this.queue.push(el)
    }
}

const songs = new Playlist<Song>();