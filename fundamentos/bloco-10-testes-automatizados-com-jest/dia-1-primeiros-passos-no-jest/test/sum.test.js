// loginValidation.test.js
const { test, expect } = require("@jest/globals");
const sum = require("../src/sum.js");

describe("a função verifyCredentials()", () => {

  test('Verifica se 4 + 5 é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('Verifica se 4 + 5 é 9', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test('Verifica se o valor passado é um numero', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('Verifica se o erro retornado é "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });
  });