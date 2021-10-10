import React from "react";

class DescricaoCargo extends React.Component {
  render() {
    const { change, descricao } = this.props;
    return(
      <label htmlFor="descricao" className="form-flex">
        Descrição do Cargo:
        <input 
          onChange={change} 
          type='text' 
          name="descricao" 
          id='descricao' 
          value={descricao}>
        </input>
    </label>
    )
  }
}

export default DescricaoCargo;