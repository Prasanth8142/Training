import React from 'react'
import { context } from './A'
import { useContext } from 'react'
function B() {
   let{a,setA}= useContext(context)
  return (
    <div>
        <h1>{a}</h1>
        <button onClick={()=>{setA(a+1)}}>Click</button>
    </div>
  )
}

export default B