// Exercicio 2 parte 2
const assert = require('assert');
// escreva a função wordLengths aqui

function wordLengths(array) {
  let newArray = [];
  for (let key = 0; key < array.length; key += 1) {
    newArray.push(array[key].length);
  }
  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);