let age: number | string = 21;

age = 32;
age = '23';

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = {
    x: 1,
    y: 34
}

coordinates = {lat: 2222, long: 3333}

function printAge(age: number | string): void {
    console.log(`You are ${age} years old`)
}

printAge(23);
printAge('33');

// Type Narrowing
function calculateTax(price: number | string, tax: number) {
    if (typeof price === 'string') {
        price = price.replace('s', '');
        return parseFloat(price) * tax
    } else {
        price * tax
    }
}

// const stuff: (number | string)[] = [1, '3', 2];

const coords: (Point | Loc)[] = [];
coords.push({lat: 223, long: 445})

let zero: 0 = 0;

let mood: 'Happy' | 'Sad' = 'Happy';

mood = 'Sad'

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

let today: DayOfWeek = 'Wednesday';