const { default: expect } = require('expect');
const myFizzBuzz = require('./exc02');

describe('testa a função myFizzBuzz', () => {
  it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(7)).toBe(7);
    expect(myFizzBuzz('2')).toBe(false);
  })
})