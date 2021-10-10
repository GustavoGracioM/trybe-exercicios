import React from "react";

class TipoInput extends React.Component {
  render() {
    const { change } = this.props;
    return (
      <div className="tipoLabel" onChange={ change } >Tipo:
        <label for="casa">
          <input 
            id="casa" 
            value="Casa" 
            name="tipo" 
            type="radio" 
            required>
          </input>
          Casa
        </label>
        <label for="apartamento">
          <input 
            id="apartamento" 
            value="Apartamento" 
            name="tipo" 
            type="radio" 
            required>
          </input>
          Apartamento
        </label>
      </div>
    )
  }
}

export default TipoInput;