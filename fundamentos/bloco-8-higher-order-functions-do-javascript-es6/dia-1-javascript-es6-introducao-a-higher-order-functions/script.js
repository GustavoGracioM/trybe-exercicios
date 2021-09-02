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