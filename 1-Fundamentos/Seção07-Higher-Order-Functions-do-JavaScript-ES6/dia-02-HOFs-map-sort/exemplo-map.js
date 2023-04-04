const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
//==================================================================================================
//
//
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => (number > 0 ? number * -1 : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]
//==================================================================================================
//
//
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const junta = (product, prices) => products.map((product, index) => ({ [product]: prices[index] }));
const listaProducts = junta(products, prices);
console.log(listaProducts);
//==================================================================================================
//
//
const numbers2 = [1, 2, 3, 4, 5, 6];
console.log(numbers.map((number) => number * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const evenNumbers = [];
numbers.forEach((number) => {
  if (number < 5 && number % 2 === 0) {
    evenNumbers.push(number);
  }
});
console.log(evenNumbers); // Retorno: [2, 4]
