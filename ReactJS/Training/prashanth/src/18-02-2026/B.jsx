import React, { useState } from 'react'
import C from './C'
import { useCallback } from 'react'

function B() {
    console.log("B Component")
    let [state,setstate]=useState(0)
    const handle=useCallback(()=>{
      console.log("Callback")
    },[])
  return (

    <div>
        <button onClick={()=>{setstate(state+1)}}>Click{state}</button>
        <button onClick={handle}>Clickeddd</button>
        
        <C  />
    </div>
  )
}

export default B