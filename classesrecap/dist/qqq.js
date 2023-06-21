"use strict";
const nums = [];
const colors = [];
const inputEl = document.querySelector("#username");
console.log(inputEl);
inputEl.value = 'hacked';
document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
identity(7);
identity('hello');
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(['a', 'b', 'c']));
getRandomElement([5, 6, 21, 3334, 56]);
getRandomElement(['a', 'v', 'asd']);
let x = 23;
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
console.log(merge({ name: 'colt' }, { pets: ['blue', 'elton'] }));
const comboObj = merge({ name: 'colt' }, { pets: ['qqqq', 'eeeee'] });
function printDoubleLength(thing) {
    return thing.length * 2;
}
