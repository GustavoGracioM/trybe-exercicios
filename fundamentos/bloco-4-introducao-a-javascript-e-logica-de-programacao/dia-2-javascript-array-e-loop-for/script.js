//Array
// Exercicio 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

// Exercicio 2
let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

// Exercicio 3
menu.push('Contato');

console.log(menu);

//For
//Exercicio 1
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
  }

// Exemplo For/Of
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
    console.log(numero);
}  

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

// For/Of
// Exercicio 1
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names){
    console.log(name);
}