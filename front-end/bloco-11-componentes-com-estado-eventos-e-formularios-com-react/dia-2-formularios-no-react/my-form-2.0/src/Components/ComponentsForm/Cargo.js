import React from "react";

class Cargo extends React.Component {
  render() {
    const { change, cargo } = this.props;
    return(
      <label htmlFor="cargo" className="form-flex">
        Cargo:
        <textarea 
          type="text"
          onChange={change} 
          name='cargo' 
          id='cargo' 
          value={cargo}
          onMouseLeave={() => {
            alert('Preencha com cuidado esta informação.');
          }}>
        </textarea>
    </label>
    )
  }
}

export default Cargo;