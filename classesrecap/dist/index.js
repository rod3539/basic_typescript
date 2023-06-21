"use strict";
class Player {
    constructor(first, last, id) {
        this.score = 0;
        this.first = first;
        this.last = last;
        this.id = id;
    }
    secretMethod() {
        console.log('secret');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
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
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}
const bike1 = new Bike('red');
const jacket1 = new Jacket('Prada', 'black');
// abstract는 인스턴스화 할 수 없다.
// 자식 클래스에게 어떻게 해야한다고 가이드 할 때 사용한다.
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("bettu", "white", 200000);
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
