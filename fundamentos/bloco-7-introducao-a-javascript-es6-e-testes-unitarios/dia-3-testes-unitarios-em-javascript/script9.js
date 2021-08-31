// Exercicio 4 parte 2
const assert = require('assert');
// escreva a função findTheNeedle aqui

function findTheNeedle(array, posicao) {
  let result = -1
  for (let key = 0; key < array.length; key += 1) {
    if (array[key] === posicao) {
      result = array.indexOf(posicao);
    }
  }
  return result;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);