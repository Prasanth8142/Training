import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Increment
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement (Prevent negative values)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1>Counter: {count}</h1>

      <div style={styles.buttonGroup}>
        <button onClick={increment} style={styles.button}>
          Increment
        </button>

        <button
          onClick={decrement}
          style={styles.button}
          disabled={count === 0}
        >
          Decrement
        </button>

        <button onClick={reset} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Counter;