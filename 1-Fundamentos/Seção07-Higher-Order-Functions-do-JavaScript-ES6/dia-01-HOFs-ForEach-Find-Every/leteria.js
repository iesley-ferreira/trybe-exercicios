const checkNumber = (aposta, numero) => aposta === numero;

const lotteryResult = (aposta, callback) => {
  numero = Math.ceil(Math.random() * 5);
  console.log(numero);
  return callback(aposta, numero) ? 'Lucky day, you won!' : 'Try Again!';
};
console.log(lotteryResult(5, checkNumber));
