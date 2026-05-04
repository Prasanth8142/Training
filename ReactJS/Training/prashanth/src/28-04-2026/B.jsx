import React from "react";
import useCounter from './C'

function B() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default B