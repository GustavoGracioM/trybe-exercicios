// Exercicio 1 
const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
  }
}
testingScope(true);

// Exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// Seu código aqui.
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

// Exercicio 1 parte 2
const fatorial = number => { 
  let value = 0;
  for (let key = (number - 1); key  >= 1; key -= 1) {
    let valueFatorial =  number * key;
    value += valueFatorial;
  } 
  console.log(value);
};

fatorial(4);

const maioPalavra = string => {
  let palavras = string.split(' ');
  let max = 0;
  let value = '';
  for (const palavra of palavras) {
    if (palavra.length > max) {
      max = palavra.length;
      value = palavra;
    }
  }
  return console.log(value);
};

maioPalavra('Gustavo Gracio');