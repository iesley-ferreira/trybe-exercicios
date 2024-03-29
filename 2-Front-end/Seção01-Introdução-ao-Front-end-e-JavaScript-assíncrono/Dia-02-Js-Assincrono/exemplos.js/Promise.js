const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
});

const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
});

const randomPromise = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error(`O número ${randomNumber} não é valido. Somente números pares são válidos!`))
      }
    }, 1000)
  });

resolvedPromise().then((response) => console.log(`ResolvedPromise: O número gerado é ${response}`));

rejectedPromise()
  .then((response) => {
    console.log(`O número gerado é ${response}`);
    })
    .catch((error) => {
      console.log(`RejectPromise: ${error.message}`);
  });

  randomPromise()
    .then((response) => {
      console.log(`O número ${response} é par`)
    })
    .catch((error) => {
      console.log(error.message);
    });