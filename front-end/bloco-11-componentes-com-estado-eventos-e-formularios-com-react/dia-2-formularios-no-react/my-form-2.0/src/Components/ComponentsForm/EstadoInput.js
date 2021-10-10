import React from "react";

class EstadoInput extends React.Component {
  render() {
    const { change, estado } = this.props;
    const states = [
      { 'AC': 'Acre' },
      { 'AL': 'Alagoas' },
      { 'AP': 'Amapá' },
      { 'AM': 'Amazonas' },
      { 'BA': 'Bahia' },
      { 'CE': 'Ceará' },
      { 'DF': 'Distrito Federal' },
      { 'ES': 'Espírito Santo' },
      { 'GO': 'Goías' },
      { 'MA': 'Maranhão' },
      { 'MT': 'Mato Grosso' },
      { 'MS': 'Mato Grosso do Sul' },
      { 'MG': 'Minas Gerais' },
      { 'PA': 'Pará' },
      { 'PB': 'Paraíba' },
      { 'PR': 'Paraná' },
      { 'PE': 'Pernambuco' },
      { 'PI': 'Piauí' },
      { 'RJ': 'Rio de Janeiro' },
      { 'RN': 'Rio Grande do Norte' },
      { 'RS': 'Rio Grande do Sul' },
      { 'RO': 'Rondônia' },
      { 'RR': 'Roraíma' },
      { 'SC': 'Santa Catarina' },
      { 'SP': 'São Paulo' },
      { 'SE': 'Sergipe' },
      { 'TO': 'Tocantins' },
    ];
    return (
      <label className="form-flex">Estado:
        <select onChange={change} value={estado} name="estado" required> 
          {states.map((state) => (<option key={Object.keys(state)} value={Object.values(state)}>{Object.values(state)}</option> ))}
        </select>
      </label>
    )
  }
}

export default EstadoInput;