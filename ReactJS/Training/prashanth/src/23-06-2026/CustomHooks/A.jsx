import { useState } from "react";

function A(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);

  return { count, increment };
}

export default A