import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['trybe', 'ajudar em casa', 'lazer'];

class App extends React.Component  {
  render() {
    return (
      <ul><h1>Tarefas</h1>
        { tarefas.map(tarefa => Task(tarefa))}
      </ul>
    );
  }
}

export default App;
