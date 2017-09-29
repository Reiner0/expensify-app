/*
babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
*/

// var can be redefined and reassigned, scoped to function
var nameVar = 'Reiner';
nameVar = 'Leal';
console.log('nameVar', nameVar);

// let cannot be redefined but can be reassigned
let nameLet = 'Jessica';
nameLet = 'Serena';
console.log('nameLet', nameLet);

// const cannot be redefined or reassigned
const nameConst = 'Frank';
console.log('naneConst', nameConst);

// Block scoping

var fullName = 'Reiner Leal';

if (fullName) {
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
