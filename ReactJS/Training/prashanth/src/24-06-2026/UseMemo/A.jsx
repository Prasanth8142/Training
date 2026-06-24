import React, { useMemo, useState } from "react";

function A() {
  const [count, setCount] = useState(0);

  const square = useMemo(() => {
    console.log("Calculating...");
    return count * count;
  }, [count]);

  return (
    <>
      <h2>Square: {square}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default A