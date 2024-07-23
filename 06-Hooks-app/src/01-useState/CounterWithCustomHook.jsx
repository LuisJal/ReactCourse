import React from "react";
import Button from "react-bootstrap/Button";
import { useCounter } from "../hooks/useCounter";


export const CounterWithCustomHook = () => {
  const {counter,increment,reset,decrement} = useCounter(10);

  return (
    <>
      <h1>Counter with Hook:{counter} </h1>
      <hr />
      <Button onClick={()=>increment(2)} variant="primary" size="lg" active>
        +1
      </Button>{" "}
      <Button onClick={reset} variant="secondary" size="lg">
        Reset
      </Button>{" "}
      <Button onClick={()=>decrement(2)} variant="secondary" size="lg">
        -1
      </Button>
    </>
  );
};
