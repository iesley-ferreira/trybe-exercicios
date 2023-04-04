const pessoas = [
  { nome: 'Ana', cargo: 'Analista' },
  { nome: 'João', cargo: 'Gerência' },
  { nome: 'Aline', cargo: 'Analista' },
  { nome: 'Joana', cargo: 'Gerência' },
];

const verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');

console.log(verificaCargo);
//
//-------------------------------------------------------------------------------
const verificaCargo2 = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');

console.log(verificaCargo2);
//
//------------------------------------------------------------------------------
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (names, letter) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter(listNames, 'J')); // true
console.log(verifyFirstLetter(listNames, 'X')); // false
