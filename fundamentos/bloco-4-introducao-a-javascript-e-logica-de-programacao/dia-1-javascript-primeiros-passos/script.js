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

let nota = 70;
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