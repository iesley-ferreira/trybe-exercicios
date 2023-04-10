const listaNumeros = [10, 20, 30, 40];

// Armazena o resultado em uma nova variável maiorVinte
let maiorVinte = listaNumeros.filter((num) => num > 20);

/* console.log(maiorVinte); */
//
//======================================================================================
//
const valorItens = [1, 32, 44, 2, 3];

let somaNumeros =  valorItens.reduce((acc, curr) => acc + curr, 0);
/* console.log(somaNumeros); */
//
//======================================================================================
//
const numbers = [1, 32, 44, 2, 3];

const total = () => numbers.reduce((acc, curr) => acc + curr, 30);
/* console.log(total());
console.log(`valor final do acc é ${total()}`); */
//
//   SEPARANDO EM FUNCOES 
//
const numbers2 = [1, 32, 44, 2, 3];

const sumNumbers =  (acc, curr) => acc + curr;

const totalSum = numbers.reduce(sumNumbers, 30);

console.log(totalSum); //112
//
//======================================================================================
//
let numbers3 = [50, 85, -30, 3, 15];

const maior = () => numbers.reduce((acc, curr) =>  curr > acc ? acc = curr : acc );
console.log(maior());
//
//   SEPARANDO EM FUNCOES 
//
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers.reduce(getBigger);
console.log(bigger); // 85