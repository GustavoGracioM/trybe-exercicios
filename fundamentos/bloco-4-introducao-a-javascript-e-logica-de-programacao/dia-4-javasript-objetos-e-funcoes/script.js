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

function subtracao(a, b){
    let resultado = a - b;
    return console.log(resultado);
}
subtracao(10,5);

function multiplicacao(a, b){
    let resultado = a * b;
    return console.log(resultado);
}
multiplicacao(10,5);

function divisao(a, b){
    let resultado = a / b;
    return console.log(resultado);
}
divisao(10,5);

function modulo(a, b){
    let resultado = a % b;
    return console.log(resultado);
}
modulo(10,5);

//Exercicio 2
function maiorNumero(number1, number2){
    if (number1 > number2){
        resultado = "O numero " + number1 + " é maior do que o numero " +number2;
    }else{
        resultado = "O numero " + number2 + " é maior do que o numero " +number1;
    }
    return console.log(resultado);
}
maiorNumero(10,50);

//Exercicio 3
function maiorDeTres(number1, number2, number3){
    if(number1 > number2 && number2 > number3){
        resultado = "variavel " + number1 + " é maior do que variavel " + number2 + " e " + number3;
      }else if (number2 > number1 && number2 > number3){
        resultado = "variavel " + number2 + " é maior do que variavel " + number1 + " e " + number3;
      }else {
        resultado = "variavel " + number3 + " é maior do que variavel " + number1 + " e " + number2;
      }
    return console.log(resultado);
}
maiorDeTres(6,5,7);

//Exercicio 4
function positivoNegativo(number){
    if (number > 0){
        console.log("positive");
      }else {
        console.log("negative");
      }
}
positivoNegativo(-10);

//Exercicio 5
function triangulo(number1, number2, number3){
    if (number1 <= 0 || number2 <= 0 || number3 <= 0) { 
        resultado ="ângulo invalido";
      } else if (number1 + number2 + number3 === 180){
        resultado ="é um triangulo";
      }else {
        resultado ="não é um triangulo";
      }
      return console.log(resultado);
}
triangulo(80,50,0);

//Exercicio 6
function xadrez(peca){
    switch (peca.toLowerCase()){
        case 'peao':
          resultado ="O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.";
          break;
        case "torre":
          resultado ="A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.";
          break;
        case "cavalo":
          resultado ="É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.";
          break;
        case "bispo":
          resultado ="O bispo move-se ao longo da diagonal. Não pode pular outras peças.";
          break;
        case "rainha":
          resultado ="A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.";
          break;
        case "rei":
          resultado ="O rei pode mover-se em todas as direções (horizontal, vertical e diagonal somente uma casa de cada vez.";
          break;
        default:
          resultado ="Não é uma peça de xadrez";
      }
    return console.log(resultado);
}
xadrez('torre');

//Exercico 7
function media(nota){
    if (nota >= 0 && nota <= 100){
        if (nota >= 90){
            resultado = "A";
        }else if (nota >= 80){
            resultado = "B";
        }else if (nota >= 70){
            resultado = "C";
        }else if (nota >= 60){
            resultado = "D";
        }else if (nota >= 50){
            resultado = "E";
        }else {
            resultado = "F";
        }
        }else {
        resultado = "Nota invalida";
        }
    return console.log(resultado);    
}
media(81);

//Exercicio 8
function par(number1, number2, number3){
    if (number1 % 2 === 0 || number2 % 2 === 0 || number1, number3 % 2 === 0){
        resultado = "é par";
      }else{
        resultado = "não é par";
      }
    return console.log(resultado);
}
par(1,1,5);

//Exercicio 9
function impar(number1, number2, number3){
    if (number1 % 2 === 1 || number2 % 2 === 1 || number1, number3 % 2 === 1){
        resultado = "é impar";
      }else{
        resultado = "não é impar";
      }
    return console.log(resultado);
}
impar(2,2,2);

//Exercico 10
function venda(valorCusto, valorVenda){
    let impostoSobreOCusto = 20/100;
    if(valorCusto <= 0 || valorVenda <= 0){
        resultado = "Valor invalido";
    }else{
        let valorCustoTotal = valorCusto + impostoSobreOCusto;
        let lucro = valorVenda - valorCustoTotal;
        resultado = lucro+"%";
    }
    return console.log(resultado);
}
venda(100, 200);

//Exercicio 11

// Exercicios
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// Exercicio 1
console.log("Bem vinda, " + info.personagem);

// Exercicio 2
info.recorrente = "Sim";
console.log(info);

// Exercicio 3
for (let key in info){
    console.log(key);
}

// Exercicio 4
for (let key in info){
    console.log(info[key]);
}

// Exercicio 5
let secondeInfo = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

for(let key in info){
    if (info[key] === secondeInfo[key]){
        console.log("Ambos recorrentes");
    }else{
        console.log(info[key] + " e " + secondeInfo[key]);
    }
}

// Exercicios sobre Funções
// Exercicio 1
function palindromo(string){
    if (string === string.split("").reverse().join("")){
        resultado = true;
    }else {
        resultado = false;
    }
    return console.log(resultado);
}
palindromo("ovo");

// Exercicio 2
let higherNumber = [500, 3, 6, 700, 100, 1]; 
function maiorIndice(array){
  for (let key1 = 0; key1 < array.length; key1 += 1){
    let contador = 0;
      for (let key2 = 0; key2 < array.length; key2 += 1){
          if (array[key1] > array[key2]){
            contador += 1;
          }
      }
    
    if (contador === array.length - 1){
        console.log(array[key1]);
    }
  }
}
maiorIndice(higherNumber);

// Exercicio 3
let smallerNumber = [50, 30, 6, 7, 10, 100]; 

function menorIndice(array){
    for (let key1 = 0; key1 < array.length; key1 += 1){
        let contador = 0;
          for (let key2 = 0; key2 < array.length; key2 += 1){
              if (array[key1] < array[key2]){
                contador += 1;
              }
          }
        
        if (contador === array.length - 1){
            console.log(array[key1]);
        }
      }    
}
menorIndice(smallerNumber);

// Exercicio 4
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorNome(nome){
    for (let key1 = 0; key1 < nome.length; key1 += 1){
        let contador = 0;
        for (let key2 = 0; key2 < nome.length; key2 += 1){
             if(nome[key1].length > nome[key2].length){
                 contador += 1;
           }
        }
        if (contador === nome.length - 1){
            console.log(nome[key1]);
        }
    }
}
maiorNome(nomes);

// Exercicio 5
let repete = [2, 3, 2, 5, 8, 2, 3];
function recorrente(array){
    for (let key1 = 0; key1 < array.length; key1 += 1){
        let contador = 0;
        for (let key2 = 0; key2 < array.length; key2 +=1){
            if (array[key1] === array[key2]){
                contador += 1;
                console.log(array[key1])
            }
        }
        if ( contador )
        if (contador === array.length ){
            console.log(array[key1]);
        }
    }
}
recorrente(repete);

// Exercicios 6
let somatorio = 5;
let arrayDeNumeros = [];
let resultado = 0;
function somaDeTudo(numero){
    for (let soma = 1; soma <= numero; soma += 1){
        arrayDeNumeros.push(soma);
        resultado += soma
    }
    console.log(arrayDeNumeros.join('+') + " = " + resultado);
}
somaDeTudo(somatorio);

// Exercicio 7
let word = "trybe";
let ending = "be";
function finalDaOutra(inicio, fim){
    let tamanho = Math.trunc(inicio.length / 2);
    if(inicio.slice(-tamanho) === fim){
        return console.log(true);
    }else{
        return console.log(false);
    }
}
finalDaOutra(word, ending);

