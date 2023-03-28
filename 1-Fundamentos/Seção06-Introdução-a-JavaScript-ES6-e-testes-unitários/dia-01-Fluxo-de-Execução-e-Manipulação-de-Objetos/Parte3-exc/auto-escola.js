const studentRegister = (name, age) => {
 
  try {
    validateInputs(name, age);
    validateAge(age);
    return (`${name}, seja bem-vindo(a) à AuTrybe!`);
  } catch (error) {
    return error.message;
  }
};

const validateInputs = (name, age) => {
  if (typeof (name) !== "string" || typeof (age) !== "number"){
    throw new Error('Todas as informações são necessárias');
  }
};

const validateAge = (age) => {
  if (age < 18){
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas')
  }
};

console.log(studentRegister("Renan"));