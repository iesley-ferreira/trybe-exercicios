const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];
const ex1 = pessoas.map((pessoa) => pessoa.idade).sort((a, b) => a - b);
console.log(ex1);
