import React from "react";

class NomeInput extends React.Component {
  render() {
    const { change, nome, } = this.props;
    const nomeUpper = nome.toUpperCase();
      return (
        <label className="form-flex">Nome:
          <input 
            onChange={change} 
            value={nomeUpper}  
            name="nome" 
            type="text" 
            maxLength={40} 
            required>
          </input>
        </label>
      )
  }
}

export default NomeInput;