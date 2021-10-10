import React from "react";
import Cargo from "./ComponentsForm/Cargo";
import CidadeInput from './ComponentsForm/CidadeInput';
import CpfInput from './ComponentsForm/CpfInput';
import Curriculo from "./ComponentsForm/Curriculo";
import DescricaoCargo from "./ComponentsForm/DescricaoCargo";
import EmailInput from './ComponentsForm/Email';
import EnderecoInput from './ComponentsForm/EnderecoInput';
import EstadoInput from './ComponentsForm/EstadoInput';
import NomeInput from './ComponentsForm/NomeInput';
import TipoInput from './ComponentsForm/TipoInput';

class Form extends React.Component {
  render() {
    const { handleChange, handleClick, handleSumbit, onBlurHandler, onBlurHandlerEmail, valueState } = this.props;
    return (
      <form onSubmit={handleSumbit}>
        <fieldset className='form-contanier'>
        <legend>Dados pessoais:</legend>
          <h1>Fomulario Trybe</h1>
          <NomeInput change={handleChange} nome={valueState.nome}/>
          <EmailInput change={handleChange} email={valueState.email} onBlurHandlerEmail={onBlurHandlerEmail}/>
          <CpfInput change={handleChange} cpf={valueState.cpf}/>  
          <EnderecoInput change={handleChange} endereco={valueState.endereco}/> 
          <CidadeInput change={handleChange} cidade={valueState.cidade} onBlurHandler={onBlurHandler}/>
          <EstadoInput change={handleChange} estado={valueState.estado}/>
          <TipoInput change={handleClick}/>
        </fieldset>
        <fieldset className="form-contanier">
          <legend>Dados profissionais:</legend>
          <h1>Fomulario Trybe</h1>
          <Curriculo change={handleChange} curriculo={valueState.curriculo}/>
          <Cargo change={handleChange} cargo={this.cargo}/>
          <DescricaoCargo change={handleChange} descricao={this.descricao}/>
        </fieldset>
        <button type="submit">Enviar</button>
    </form>
    )
  }
}

export default Form;