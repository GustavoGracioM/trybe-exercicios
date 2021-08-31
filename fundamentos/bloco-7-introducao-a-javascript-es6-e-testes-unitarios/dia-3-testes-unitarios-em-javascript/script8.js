// Exercicio 3 parte 2
const assert = require('assert');
// escreva a função sumAllNumbers aqui

function sumAllNumbers(array) {
  let result = 0;
  for (let key = 0; key < array.length; key += 1) {
    result += array[key];
  }
  return result;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);