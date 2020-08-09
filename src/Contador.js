import React from "react";

const Contador = (props) => {
  return (
    <div>
      <h1>Contador</h1>
      <h2>Valor: {props.valor}</h2>
      <button>+1</button>
    </div>
  );
};

export default Contador;
