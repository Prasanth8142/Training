import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
function Ap() {
    let s=useDispatch()
    let m=useSelector((state)=>{return state.sum})
  return (
    <div>{m}
    <button onClick={()=>{s({type:"a"})}}>Increase</button> <br />
     <button onClick={()=>{s({type:"b"})}}>decrease</button></div>
   
  )
}

export default Ap