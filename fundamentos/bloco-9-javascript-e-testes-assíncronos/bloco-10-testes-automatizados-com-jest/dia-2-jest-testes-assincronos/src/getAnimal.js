const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.find((animal) => animal.name === name);

      if (result) {
        return resolve(result);
      }

      return reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.find((animal) => animal.age === age);

      if (result) {
        return resolve(result);
      }

      return reject(new Error('Nenhum animal com essa idade!'));
    }, 100);
  })
);


module.exports = { findAnimalByName, findAnimalByAge };

