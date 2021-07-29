// //Exercicios para praticar
// //Array
// // Exercicio 1
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];
// console.log(menuServices);

// // Exercicio 2
// let indexOfPortfolio = menu.indexOf('Portfólio');
// console.log(indexOfPortfolio);

// // Exercicio 3
// menu.push('Contato');

// console.log(menu);

// //For
// //Exercicio 1
// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for (let index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index]);
//   }

// // Exemplo For/Of
// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
//     console.log(numero);
// }  

// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }

// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
// }

// // For/Of
// // Exercicio 1
// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let name of names){
//     console.log(name);
// }

//Exercicios do dia
//Exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let number of numbers){
  console.log(number);
}

// Exercicio 2
let resultado2 = 0;
for (let number of numbers){
  resultado2 += number; 
}
console.log(resultado2);

// Exercicio 3
let soma = 0;
for (let number of numbers){
  soma += number; 
}
resultado3 = soma / numbers.length;
console.log(resultado3);

//Exercicio 4
if (resultado3 > 20){
  console.log('valor maior que 20');
}else{
  console.log('valor menor ou igual a 20');
}

//Exercicio 5
function sortfunction(a, b){
  return (a - b)
}
let largerNumber = numbers.sort(sortfunction);
console.log("O maior numero é: " +largerNumber[9]);

//Exercicio 6
let resultado6 = 0;
for (let number of numbers){
  if (number % 2 === 1){
    resultado6 += 1;
  }
}
console.log("Total de numeros impares: " +resultado6);

//Exercicio 7
console.log("O menor numero é: " +largerNumber[0]);

//Exercicio 8
let resultado8 = [];
for (let index = 1; index <= 25; index +=1){
    resultado8.push(index);
}
console.log(resultado8);

//Exercicio 9
let resultado9 = [];
for (let index = 0; index < 25; index +=1){
  resultado9.push( resultado8[index] / 2);
}
for (let index = 0; index < 25; index +=1){
  console.log(resultado8[index]+" dividido por 2 é: "+resultado9[index]);
}