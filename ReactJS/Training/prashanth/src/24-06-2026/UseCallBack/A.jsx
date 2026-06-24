import React, { useState, useCallback } from "react";

function A() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <>
      <button onClick={handleClick}>
        Click Me
      </button>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </>
  );
}

export default A;