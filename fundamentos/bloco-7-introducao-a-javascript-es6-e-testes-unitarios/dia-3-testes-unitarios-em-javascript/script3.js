const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.deepStrictEqual(expected, [1, 2, 4], 'Erro');
assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'Erro');
assert.strictEqual(expected.length, 3, 'Erro');

const expected2 = myRemoveWithoutCopy([1, 2, 3, 4], 5);
assert.deepStrictEqual(expected2, [1, 2, 3, 4], 'Erro');