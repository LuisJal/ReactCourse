import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  //Sumar
  const handleAdd = () => setCounter((c) => c + 1);
  //Restar
  const handleSubtract = () => setCounter((c) => c - 1);
  //Reiniar
  const handleReset = () => setCounter((c) => (c = 0));

  return (
    <>
      <h1>CounterAppLuis</h1>
      <h2 data-testid="contador">{counter}</h2>
      <div className="botones">
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
