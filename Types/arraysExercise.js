// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [[]];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (products) {
    var total = 0;
    products.map(function (x) {
        total += x.price;
    });
    return total;
};
console.log(getTotal([{ name: '22', price: 111 }, { name: '33', price: 123 }]));
