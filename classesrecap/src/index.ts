class Player {
    public readonly id: number;
    public first: string;
    public last: string;
    private score: number = 0;
    constructor(first: string, last: string, id: number) {
        this.first = first;
        this.last = last;
        this.id = id;
    }

    private secretMethod(): void {
        console.log('secret')
    }

    get fullName(): string {
        return `${this.first} ${this.last}`
    }
}


// class Player {
//     public score: number = 0;
//     constructor(public first: string, public last: string) {

//     }

//     private secretMethod(): void {
//         console.log('secret')
//     }
// }


const elton = new Player("Elton", "qqqq", 33);
console.log(elton);

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    color;
    constructor(color: string) {
        this.color = color
    }
}

class Jacket implements Colorful {
    constructor(public brand: string, public color: string) { }
}

const bike1 = new Bike('red');

const jacket1 = new Jacket('Prada', 'black');

// abstract는 인스턴스화 할 수 없다.
// 자식 클래스에게 어떻게 해야한다고 가이드 할 때 사용한다.

abstract class Employee {
    constructor(public first: string, public last: string) { }
    abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
    constructor(public first: string, public last: string, private salary: number) {
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(public first: string, public last: string, private hourlyRate: number, private hoursWorked: number) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

const betty = new FullTimeEmployee("bettu", "white", 200000);
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);