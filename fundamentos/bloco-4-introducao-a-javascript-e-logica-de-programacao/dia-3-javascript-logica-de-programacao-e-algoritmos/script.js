// Exercicio 1
let n1 = 6;
for (let y = 1; y <= n1; y += 1) {
    let quantidade1 = "";
    for (let x = 1; x <= n1; x +=1){
        quantidade1 += "*";
    }
    console.log(quantidade1);
}

// Exercicio 2
let n2 = 5;
let quantidade2 = "";
for (let y = 1; y <= n2; y += 1){
    quantidade2 += "*";
    console.log(quantidade2);
}

// Exercicio 3
let n3 = 5;
let quantidade3 = "     ";
for (let y = 1; y <= n3; y += 1){
    quantidade3 = quantidade3.slice(1);
    quantidade3 += "*";
    console.log(quantidade3);
}

// Exercicio 4
let n4 = 5;
let quantidade4 = "      ";
for (let y = 1; y <= 3; y += 1){
    if (y === 1){
        quantidade4 = quantidade4.slice(-2)+"*";
    }else{
        quantidade4 = quantidade4.slice(1);
        quantidade4 = quantidade4.slice(-3)+"**";
        
    }
    console.log(quantidade4);
}


//Exercicio 6
let n6 = 11;
let validacao = 0;
for (let primo = 0; primo <= n6; primo += 1){
    if (n6 % primo === 0){
        validacao += 1;
    }
}
if (validacao === 2){
    console.log(n6+" é um numero primo");
}else{
    console.log(n6+ " não é um numero primo");
}


