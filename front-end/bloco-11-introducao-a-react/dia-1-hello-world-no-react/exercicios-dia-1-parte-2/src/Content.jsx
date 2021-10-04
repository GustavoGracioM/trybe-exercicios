import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <main className='content'>
        <h2>Conteudos</h2>
        {conteudos.map((cont) => (
          <div className={cont.conteudo}>
            <p>Conteudo: {cont.conteudo}</p>
            <p>Staus: {cont.status}</p>
            <p>Bloco: {cont.bloco}</p>
         </div>
        ))}
      </main>
    )
  }
}

export default Content;
