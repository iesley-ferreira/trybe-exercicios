const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificaAcertos = (right, student) => {
  if (right === student) {
    return 1;
  } else if (student === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
};

const countPoints = (right, student, callback) => {
  let somaDosPontos = 0;
  for (let index = 0; index < right.length; index += 1) {
    const action = callback(right[index], student[index]);
    somaDosPontos += action;
  }
  return `Resultado final: ${somaDosPontos} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaAcertos));
