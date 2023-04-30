const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const todosPares = numbers.filter((number) => number % 2 === 0);
const somaPares = () => todosPares.reduce((acc, curr) => acc + curr);
console.log(somaPares());

const sumAllEven = () =>
  numbers.reduce((acc, curr) => (curr % 2 === 0 ? acc + curr : acc), 0);
console.log(sumAllEven());
//
//           SEPARADAMENTE
//
const sum = (accumulator, number) =>
  number % 2 === 0 ? accumulator + number : accumulator;

const sumNumbers = (array) => array.reduce(sum, 0);

console.log(sumNumbers(numbers)); // 152
