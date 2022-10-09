// not in JS that frequently: range error
const numbers = [6, 5, 4, 1];
// you should not do it (most of the time)
numbers.length = 2;
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[25]);

// reference error
// console.log(money);
const money = 80;

// syntax error
// A.
// for (let i = 0; i < 5 i++) {

// }

// B.
// if(numbers.length >/ 2){

// }
// else

let student = { address: 'dhaka' /*{ city: 'dhaka' }*/ };
console.log(student.address.city);
