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