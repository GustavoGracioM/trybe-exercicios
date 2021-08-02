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