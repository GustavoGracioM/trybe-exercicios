const { test, expect } = require("@jest/globals");
const { encode, decode } = require("../src/encodeDecode.js");

describe('Função encode e decode', () => {
  // Função encode
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });

  it('converte apenas a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });

  it('converte apenas a vogal "i" no número 3', () => {
    expect(encode('ix')).toEqual('3x');
  });

  it('converte apenas a vogal "o" no número 4', () => {
    expect(encode('olho')).toEqual('4lh4');
  });

  it('converte apenas a vogal "u" no número 5', () => {
    expect(encode('urubu')).toEqual('5r5b5');
  });

  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);;
  });

  // Função decode
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
    expect(decode('3x')).toEqual('ix');
  });

  it('converte apenas o número 4 na vogal o', () => {
    expect(decode('4lh4')).toEqual('olho');
  });

  it('converte apenas o número 5 na vogal u', () => {
    expect(decode('5r5b5')).toEqual('urubu');
  });

  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });

});