import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    numeroDeCliquesBtn1: 0,
    numeroDeCliquesBtn2: 0,
    numeroDeCliquesBtn3: 0,
  };

  handleClick1 = () => {
    this.setState((prev) => ({
      numeroDeCliquesBtn1: prev.numeroDeCliquesBtn1 +1,
    }))
  }

  handleClick2 = () => {
    this.setState((prev) => ({
      numeroDeCliquesBtn2: prev.numeroDeCliquesBtn2 +1,
    }))
  }

  handleClick3 = () => {
        this.setState((prev) => ({
      numeroDeCliquesBtn3: prev.numeroDeCliquesBtn3 +1,
    }))
  }
  render() {
    const {numeroDeCliquesBtn1, numeroDeCliquesBtn2, numeroDeCliquesBtn3} = this.state

    const btn1color1 = numeroDeCliquesBtn1 % 2 === 0 ? 'green' : 'white';
    const btn2color2 = numeroDeCliquesBtn2 % 2 === 0 ? 'green' : 'white';
    const btn3color3= numeroDeCliquesBtn3 % 2 === 0 ? 'green' : 'white';

    return(
      <div>
        <button
          onClick={this.handleClick1}
          style={{background: btn1color1}}
          >{numeroDeCliquesBtn1}
        </button>
        <button
          onClick={this.handleClick2}
          style={{background: btn2color2}}
          >{numeroDeCliquesBtn2}
        </button>
        <button
          onClick={this.handleClick3}
          style={{background: btn3color3}}
        >{numeroDeCliquesBtn3}
        </button>
      </div>
    ) 
  }
}

export default App;
