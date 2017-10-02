// Object Destructuring

// const person = {
//   name: 'Reiner',
//   age: 33,
//   location: {
//     city: 'Phoenix',
//     temp: 87
//   }
// };
//
// const { name = 'Anonymous', age } = person;
//
// console.log(`${name} is ${age}.`)
//
// const { city, temp: temperature = 90 } = person.location;
//
// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

// Array Destructuring

// const address = ['2556 E Taro Ln', 'Phoenix', 'Arizona', '85050'];
// const [ street, city, state, zip ] = address;
// console.log(`${street}\n${city}, ${state} ${zip}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ itemName, , mediumPrice ] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);
