const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((array1, array2) => array1.concat(array2));
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);