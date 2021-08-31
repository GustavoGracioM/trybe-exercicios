const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// Exercicio 2
const exepected1 = myRemove([1, 2, 3, 4], 3);
assert.deepStrictEqual(exepected1, [1, 2, 4], 'Não são iguais');
assert.notDeepStrictEqual(exepected1, [1, 2, 3, 4,], 'Error');

const exepected2 = myRemove([1, 2, 3, 4], 5);
assert.deepStrictEqual(exepected2, [1, 2, 3, 4], 'Erro');