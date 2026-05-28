import React from 'react'
import{useSelector,useDispatch} from "react-redux"
import { increment,decrement } from './A'
function C() {
 let a= useSelector((state)=>state.count.value)
  let d=useDispatch()
  return (
    <div>
      {a}
      <button onClick={()=>{d(increment())}}>Increase</button>
      <button onClick={()=>{d(decrement())}}>Decrease</button>
    </div>
  )
}


export default C