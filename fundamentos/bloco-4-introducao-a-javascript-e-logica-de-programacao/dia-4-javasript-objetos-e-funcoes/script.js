//Para Fixar Parte I
//Exercicio 1
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver:3
    }
}

//Exercicio 2
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");

//Exericio 3
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

//Exercicio 4
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo " + player.bestInTheWorld.length + " vezes.");

//Exercico 5
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");

//Para Fixar Parte II
//Exercicio 1
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

for (let key in names){
    console.log("Olá, " + names[key]);
}

//Exercicio 2
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let key in car){
    console.log(key, car[key]);
}


//Exercicio Sobre Funções 
// Exercicio 1
function soma(a, b){
    let resultado = a + b;
    return console.log(resultado);
}
soma(10,5);

//Exercicio 2
function subtracao(a, b){
    let resultado = a - b;
    return console.log(resultado);
}
subtracao(10,5);

//Exercicio 3
function multiplicacao(a, b){
    let resultado = a * b;
    return console.log(resultado);
}
multiplicacao(10,5);

//Exercico 4
function divisao(a, b){
    let resultado = a / b;
    return console.log(resultado);
}
divisao(10,5);

//Exercicio 5
function modulo(a, b){
    let resultado = a % b;
    return console.log(resultado);
}
modulo(10,5);

