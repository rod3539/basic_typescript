function printName(person: {first: string; last: string}): void {
    console.log(person.first)
}

printName({first: 'Thomas', last: 'Jenkins'})

type Point = {
    x: number,
    y: number
};

let coordinate: { x: number; y: number } = { x: 32, y: 2 }

function randomCoordinate(): Point {
    return { x: Math.random(), y: Math.random() }
}

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
}

type myNum = number;
let age: myNum= 240;

type Song = {title: string, artist: string, numStreams: number, credits: {producer: string, writer: string}}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(song);
}

const mySong: Song = {
    title: 'Unchaned Melody',
    artist: 'Righteous Brothers',
    numStreams: 222020202,
    credits: {
        producer: 'asdf',
        writer: 'wwerwer'
    }
}

calculatePayout(mySong);
printSong(mySong);

type Point2 = {
    x: number;
    y: number;
    z?: number;
}

const myPoint: Point2 = {x: 1, y: 3};

type User = {
    readonly id: number,
    username: string;
};

const user: User = {
    id: 13242,
    username: 'catgirl'
}

console.log(user.id)

type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const hapyFace: ColorfulCircle = {
    radius: 4,
    color: 'yellow'
}

type Cat = {
    numLives: number;
}

type Dog = {
    breed: string;
}

type CatDog = Cat & Dog & {
    age: number;
};

const christy: CatDog = {
    numLives:  7,
    breed: 'Husky',
    age: 5
}