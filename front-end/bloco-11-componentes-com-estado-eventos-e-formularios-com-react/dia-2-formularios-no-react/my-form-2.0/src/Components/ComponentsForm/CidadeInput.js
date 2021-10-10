import React from "react";

class CidadeInput extends React.Component {
  render() {
    const { change, cidade, onBlurHandler } = this.props;
    return (
      <label className="form-flex">Cidade:
        <input 
          onChange={change} 
          value={cidade} 
          onBlur={onBlurHandler}  
          name="cidade" 
          type="text" 
          maxLength={28}
          required>
        </input>
      </label>
    )
  }
}

export default CidadeInput;