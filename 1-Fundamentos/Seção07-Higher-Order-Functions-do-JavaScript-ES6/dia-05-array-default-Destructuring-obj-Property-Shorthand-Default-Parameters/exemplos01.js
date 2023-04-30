const { number } = require("yargs");

const arrayCountries = ["Brazil", "Japan", "China", "Canada"];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] =
  arrayCountries;

console.log(firstCountry, secondCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada
//
//===============================================================================
//
const primeNumbers = [17, 23, 37];

const sum = (a, b) => {
  console.log(a + b);
};

sum(primeNumbers[0], primeNumbers[2]); // 54

const [firstNum, secondNum, thirdNum] = primeNumbers;

sum(firstNum, thirdNum);
//
//===============================================================================
//
let comida = "gato";
let animal = "água";
let bebida = "arroz";

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida); // arroz gato água

//
//===============================================================================
//

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

[, , , , ...numerosPares] = numerosPares;

console.log(numerosPares);

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima
