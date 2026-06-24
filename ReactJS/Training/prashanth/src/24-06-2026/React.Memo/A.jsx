import React, { useState } from "react";

const Child = React.memo(({ name }) => {
  console.log("Child Rendered");
  return <h2>{name}</h2>;
});

function A() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Child name="Prasanth" />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </>
  );
}

export default A