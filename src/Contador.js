import React from "react";
import PropTypes from "prop-types";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: this.props.valor
    };
  }

  sumaUno() {
    this.setState({ valor: this.state.valor + 1 });
  }

  restaUno() {
    this.setState({ valor: this.state.valor - 1 });
  }

  reset() {
    this.setState({ valor: 0 });
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h2>Valor: {this.state.valor}</h2>
        <button onClick={() => this.restaUno()}>-1</button>
        <button onClick={() => this.reset()}>Reset</button>
        <button onClick={() => this.sumaUno()}>+1</button>
      </div>
    );
  }
}

Contador.PropTypes = {
  valor: PropTypes.number
};

export default Contador;
