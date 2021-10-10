import React from "react";

class CpfInput extends React.Component {
  render() {
    const { change, cpf } =this.props;
    return (
      <label className="form-flex">Cpf:
        <input 
          onChange={change} 
          value={cpf}  
          name="cpf" 
          type="text" 
          maxLength={11} 
          required>
        </input>
      </label>
    )
  }
}

export default CpfInput;