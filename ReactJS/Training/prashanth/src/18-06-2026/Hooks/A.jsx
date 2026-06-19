import React from 'react'
import { useState } from 'react';
function A() {
    let [count, setCount] = useState(0); // Hook
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default A