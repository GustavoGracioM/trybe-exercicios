import React from "react";

class FormResult extends React.Component {
  render() {
    const { nome, email, endereco, cidade, estado, cpf, tipo, curriculo, cargo, descricao } = this.props.currentState;
    const clear  = this.props.clear;
    return (
      <div className="result">
        <h2>Dados enviados</h2>
        <div className="result-container">
          <div>
            <h3>Pessoal</h3>
            <p>Nome: { nome }</p>
            <p>Email: { email }</p>
            <p>CPF: { cpf }</p>
            <p>Endereço: { endereco }</p>
            <p>Cidade: { cidade }</p>
            <p>Estado: { estado }</p>
            <p>Tipo: { tipo }</p>
          </div>
          <div>
            <h3>Profissional</h3>
            <p>Curriculo: {curriculo}</p>
            <p>Cargo: {cargo}</p>
            <p>Descricao: {descricao}</p>
          </div>
        </div>
        <button className="buttonResult" onClick={clear}>Limpar</button>
      </div>
    )
  }
}

export default FormResult;