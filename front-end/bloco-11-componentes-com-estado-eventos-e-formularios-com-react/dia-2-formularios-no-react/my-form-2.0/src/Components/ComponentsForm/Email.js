import React from "react";

class EmailInput extends React.Component {
  render() {
    const { change, email, onBlurHandlerEmail } = this.props;
    return (
      <label className="form-flex">Email:
        <input 
          onChange={change} 
          value={email}  
          name="email" 
          type="text" 
          onBlur={onBlurHandlerEmail} 
          required>
        </input>
      </label>
    )
  }
}

export default EmailInput;

