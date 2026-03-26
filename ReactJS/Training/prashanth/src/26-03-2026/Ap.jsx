import { useSelector,useDispatch } from "react-redux";
import React from 'react'
import { increment,decrement } from "./A";

function AP() {
    const count=useSelector((state)=>state.count.value)
    const dis=useDispatch()
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>dis(increment())}>Increase</button>
        <button onClick={()=>dis(decrement())}>Decre</button>
    </div>
  )
}

export default AP