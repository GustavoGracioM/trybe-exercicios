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

