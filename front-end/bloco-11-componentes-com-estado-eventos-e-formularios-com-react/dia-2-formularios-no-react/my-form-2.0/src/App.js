import IsEmail from 'isemail';
import React from 'react';
import './App.css';
import Form from './Components/Form'
import FormResult from './Components/FormResult';

const initialState = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: 'Acre',
  tipo: '',
  curriculo: '',
  cargo: '',
  descricao: '',
  submitted: false,
}

class App extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onBlurHandlerEmail = this.onBlurHandlerEmail.bind(this);
    this.clear = this.clear.bind(this);
    this.state = initialState;
  }
  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick({target}) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }
  handleSumbit(event) {
    event.preventDefault();
    this.setState({ submitted: true })
  }

  onBlurHandler() {
    if(this.state.cidade.match(/^\d/)) this.setState({ cidade: '' });
  }

  onBlurHandlerEmail() {
    if(!IsEmail.validate(this.state.email)) return alert('Não é um email') ;
  }

  clear() {
    this.setState(initialState);
  }

  render() {
    const { submitted } = this.state;
    return (
      <main>
        <Form 
          valueState={this.state}
          handleChange={this.handleChange}
          onBlurHandler={this.onBlurHandler}
          onBlurHandlerEmail={this.onBlurHandlerEmail}
          handleSumbit={this.handleSumbit}
          handleClick={this.handleClick}
          sendForm={this.sendForm}
        />
        { submitted && <FormResult currentState={ this.state } clear={ this.clear }/> }
      </main>

    );
  }
}


export default App;
