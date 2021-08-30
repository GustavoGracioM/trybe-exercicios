const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercicio 1
const mudarTurno = (objeto, turno, valor) => {
  objeto.turno = valor;
}
mudarTurno(lesson2, 'turno', 'manhã');

// Exercicio 2
const listarKeys = objeto => console.log(Object.keys(objeto));
listarKeys(lesson1);

// Exercicio 3
const tamanhoObjeto = objeto => console.log(Object.keys(objeto).length);
tamanhoObjeto(lesson3);

// Exercicio 4
const listarValores = objeto => console.log(Object.values(objeto));
listarValores(lesson1);

// Exercicio 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// Exercicio 6
const totalEstudantes = objeto => {
  let result = 0;
  for (let key in objeto) {
    const lesson = key;
    result += objeto[lesson].numeroEstudantes;
  }
  console.log(result);
};
totalEstudantes(allLessons);

// Exercicio 7
const valorChave = (objeto, posicao) => {
  const result = Object.values(objeto)[posicao];
  console.log(result);
};

valorChave(lesson1, 0);

// Exercicio 8
const verficar = (objeto, chave, valor) => {
  const value = Object.values(objeto);
  const keys = Object.keys(objeto);
  for (let key = 0; key < value.length; key += 1) {
    if (chave === keys[key] && valor === value[key]) {
      return true;
    }
  }
  return false;
};
console.log(verficar(lesson3, 'turno', 'noite'));