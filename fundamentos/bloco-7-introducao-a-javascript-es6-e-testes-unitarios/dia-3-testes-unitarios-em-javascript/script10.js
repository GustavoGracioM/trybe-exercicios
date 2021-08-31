// Exericico 1 parte 3
const greetPeople = (people) => {
  let greeting = [];
  for (let person in people) {
    greeting.push(`Hello ${people[person]}`)
  }
  return greeting;
};

const assert = require('assert');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);