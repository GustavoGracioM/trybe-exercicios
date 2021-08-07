// Parte 1 variaveis
const myName = "Gustavo";
const birthCity = "Mauá";
let birthYear = 2002;

birthYear = 2030;

// birthCity = "Ribeirão Pires";

// O erro acontece porque o valor atribuido a uma constante (const) não pode ser alterado.

console.log(myName);
console.log(birthCity);
console.log(birthYear);

// Parte 2.1 Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientAge);

patientId = '50';

console.log(patientId);

// Parte 2.2 Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

let base = 5;
let altura = 8;

let area = base * altura;
let perimetro = base + altura;

console.log(area);
console.log(perimetro);


// Parte 3 Condições If e Else

let nota = 80;
let estado ;

if (nota >= 80){
  estado = "aprovado";
}else if (nota < 80 && nota >= 60){
  estado = "lista";
}else {
  estado = "reprovado";
}

// Parte 4 Switch e Case

switch(estado){
  case "aprovado":
    console.log("Parabéns, você foi aprovada(o)!");
    break;
  case "lista":
    console.log("Você está na nossa lista de espera");
    break;
  case "reprovado":
    console.log("Você foi reprovada(o)");
    break;
  default:
    console.log("Valor não definido");
}

// Javascript Agora a prática

let a = 10;
let b = 2;

// Exercicio 1
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Exercicio 2
if (a < b){
  console.log("variavel b é maior do que variavel a");
}else {
  console.log("variavel a é maior do que varialvel b");
}

//Exercicio 3
let c = 20;

if(a > b && a > c){
  console.log("variavel a é maior do que variavel b e c");
}else if (b > a && b > c){
  console.log("variavel b é maior do que variavel a e c");
}else {
  console.log("variavel c é maio do que variavel a e b");
}

//Exercicio 4
if (a > 0){
  console.log("positive");
}else {
  console.log("negative");
}

//Exercicio 5
if (a <= 0 || b <= 0 || c <= 0) { 
  console.log("ângulo invalido")
} else if (a + b + c === 180){
  console.log("é um triangulo");
}else {
  console.log("não é um triangulo");
}

//Exercicio 6
let xadrez = ("Rei".toLowerCase());

switch (xadrez){
  case 'peao':
    console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
    break;
  case "torre":
    console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
    break;
  case "cavalo":
    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
    break;
  case "bispo":
    console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
    break;
  case "rainha":
    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
    break;
  case "rei":
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
    break;
  default:
    console.log("Não é uma peça de xadrez");
}

//Exercicio 7
if (nota >= 0 && nota <= 100){
  if (nota >= 90){
    console.log("A");
  }else if (nota >= 80){
    console.log("B");
  }else if (nota >= 70){
    console.log("C");
  }else if (nota >= 60){
    console.log("D");
  }else if (nota >= 50){
    console.log("E");
  }else {
    console.log("F");
}
}else {
  console.log("Nota invalida");
}

//Exercicio 8
if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
  console.log("é par");
}else{
  console.log("não é par");
}

//Exercicio 9
if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1){
  console.log("é impar");
}else{
  console.log("não é impar");
}

//Execicio 10
let valorCusto = 100;
let valorVenda = 200;
let impostoSobreOCusto = 20/100;

if(valorCusto <= 0 || valorVenda <= 0){
  console.log("Valor invalido");
}else{
  let valorCustoTotal = valorCusto + impostoSobreOCusto;
  let lucro = valorVenda - valorCustoTotal;
  console.log(lucro+"%");
}

//Exercicio 11

