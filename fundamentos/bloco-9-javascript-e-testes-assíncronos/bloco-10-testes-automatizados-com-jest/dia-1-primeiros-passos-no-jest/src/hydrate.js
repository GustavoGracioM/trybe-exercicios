function arraySoma(array) {
  let resultado = 0;
  for (let key = 0; key < array.length; key += 1) {
    resultado += Number(array[key]);
  }
  return resultado;
}

function hydrate(string) {
  const newString = string.split('');
  const result = newString.reduce((acc, curr) => {
    let numbers = parseInt(curr);
    let checkNumber = isNaN(numbers) === false;
    if (checkNumber) { return acc + numbers };
    return acc;
  }, 0);
  const pluralGlass = result === 1 ? 'copo' : 'copos';
  return `${result} ${pluralGlass} de água`;
}

module.exports = hydrate;