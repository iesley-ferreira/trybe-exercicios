const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verificaGrades = Object.values(grades).every((grade) => grade === 'Aprovado');
console.log(verificaGrades);
