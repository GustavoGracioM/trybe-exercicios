const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Erro');
assert.strictEqual(myFizzBuzz(9), 'fizz', 'Erro');
assert.strictEqual(myFizzBuzz(25), 'buzz', 'Erro');
assert.strictEqual(myFizzBuzz(7), 7, 'Erro');
assert.strictEqual(myFizzBuzz('Não é um numero'), false, 'Erro');
