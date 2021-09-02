// Exercicio 1
const contrantando = (name) => {
  const espaco = name.replace(/ /g, "");
  const minusculo = espaco.toLowerCase()
  return {fullname: name, email: `${minusculo}@trybe.com`}
};
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(contrantando));

// Exercicio 2
const randomNumber = () => Math.floor((Math.random() * 5) + 1);
const comparar = (num1, num2) => num1 === num2;
const verfica = (selected, random) => comparar(selected, random) ? 'Parabéns você ganhou' : 'Tente novamente';
console.log(verfica(3, randomNumber));

// Exercicio 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const resultProva = (gabarito, prova, action) => {
  let nota = 0;
  for (let key = 0; key < gabarito.length; key += 1) {
    const check = action(gabarito[key], prova[key]);
    nota += check;
  }
  return `Você acertou ${nota} questões`;
}

console.log(resultProva(RIGHT_ANSWERS, STUDENT_ANSWERS, (num1, num2) => {
  if (num2 !== 'N.A') {
    if (num1 === num2) {
      return 1;
    } else {
      return -0.5;
    }
  }
  return 0;
}));
    
