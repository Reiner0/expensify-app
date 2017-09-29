// arguments object - no longer bound with arrow functions

// const add = (a, b) => a + b;
// console.log(add(55, 1, 10001));

// this keyword - no longer bound

const user = {
    name: 'Reiner',
    cities: ['Phoenix', 'New Orleans', 'Chula Vista'],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}`);
    }
};
console.log(user.printPlacesLived());

// challenge area

const multiplier = {
    // numbers
    numbers: [1, 5, 15],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());
