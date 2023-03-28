const { default: expect } = require('expect');
const { encode, decode } = require('./exc03');

describe('Testa as funções encode e decode', () => {
  it('testa se encode e decode sao funções', () => {
    expect(typeof encode).toEqual('function');
  })
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  })
  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toBe('1n1');
  })
  it('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toBe('2l2');
  })
  it('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toBe('2l2');
  })
  it('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toBe('x3x3');
  })
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);
  })
  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('converte apenas o número 1 na vogal a', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  it('converte apenas o número 2 na vogal e', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it('converte apenas o número 3 na vogal i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  it('converte apenas o número 4 na vogal o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it('converte apenas o número 5 na vogal u', () => {
    expect(decode('n5')).toEqual('nu');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});