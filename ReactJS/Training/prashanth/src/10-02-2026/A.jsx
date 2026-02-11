import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './Slice'
function A() {

     let selector=useSelector((state)=>{state.counter.value})
    let dis= useDispatch()
  return (
    <div>
        <h1>Count:{selector}</h1>
        <button onClick={()=>dis(increment())}>Increase</button>
        <button onClick={()=>dis(decrement())}>Decrease</button>
    </div>
  )
}

export default A