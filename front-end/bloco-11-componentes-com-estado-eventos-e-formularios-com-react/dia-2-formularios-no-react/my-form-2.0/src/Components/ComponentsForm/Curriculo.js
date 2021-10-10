import React from "react";

class Curriculo extends React.Component {
  render() {
    const { change, curriculo } = this.props;
    return(
      <label htmlFor="curriculo" className="form-flex">
        Curruculo:
        <textarea 
          onChange={change} 
          name='curriculo' 
          id='curriculo' 
          value={curriculo} 
          maxLength="40"
          required>
        </textarea>
      </label>
    )
  }
}

export default Curriculo;