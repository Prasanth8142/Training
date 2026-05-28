import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
function A() {
    let x=useDispatch()
let m=useSelector((state)=>{return state.sum})

  return (

    
    <div>
        <h1>{m}</h1>
        <button onClick={()=>{x({type:"a"})}}>Increase</button>
        <button onClick={()=>{x({type:"b"})}}>Decrease</button>
    </div>
  )
}

export default A