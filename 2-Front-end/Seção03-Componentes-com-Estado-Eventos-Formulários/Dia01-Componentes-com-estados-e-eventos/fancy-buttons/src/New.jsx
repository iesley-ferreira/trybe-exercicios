import React from 'react';
import './App.css';

class New extends React.Component {

    state = {
        numeroDeCliques: 1,
    };

  handleClick = (num) => {
    this.setState((prev) => ({
        numeroDeCliques: prev.numeroDeCliques * num
        }))
  }

  render() {
    const { numeroDeCliques } = this.state;
    return (
      <button
        type="button"
        onClick={() => this.handleClick(2) }
      >
        { numeroDeCliques }
      </button>
    );
  }
}

export default New;