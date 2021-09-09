const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const result = names.reduce((acumulador, name) => acumulador + name.split('').reduce((ac, letra) => {
    if (letra === 'a' || letra === 'A') {
       return ac += 1;
    }
     return ac;
    }, 0 ), 0 );
  return result;
}
assert.deepStrictEqual(containsA(), 20);
