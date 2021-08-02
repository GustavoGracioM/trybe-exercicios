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


