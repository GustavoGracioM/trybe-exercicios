import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.img.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { img } = this.state;
    localStorage.setItem('dogURL', img);
    const dogBreed = img.split('/')[4];
    alert(dogBreed);
  }

  async fetchDog() {
    const requeste = await fetch('https://dog.ceo/api/breeds/image/random');
    const dog = await requeste.json();
    this.setState({ img: dog.message });
  }

  render() {
    const { img } = this.state;
    if (img === '') return 'loading...';
    return (
      <div>
        <p>Doguinhos</p>
        <button type="button" onClick={ this.fetchDog }>Novo doguinho!</button>
        <div>
          <img src={ img } alt="Random dog" />
        </div>
      </div>
    );
  }
}

export default App;
