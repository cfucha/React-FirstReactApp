import React from "react";
import "./styles.css";
import Contador from "./Contador";

export default function App() {
  return (
    <div>
      <Contador valor={10} />
      <Contador valor={20} />
      <Contador valor={8} />
    </div>
  );
}
