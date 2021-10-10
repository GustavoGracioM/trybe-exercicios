import React from "react";

class EnderecoInput extends React.Component {
  render() {
    const { change, endereco } = this.props;
    return (
      <label className="form-flex">Endereco:
        <input 
          onChange={change} 
          value={endereco}  
          name="endereco" 
          type="text" 
          required>
        </input>
      </label>
    )
  }
}

export default EnderecoInput;