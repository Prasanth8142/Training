import React, { useCallback, useState } from 'react'
import { C } from './C'

function B() {
    let[a,seta]=useState(0)
    console.log('B Component')
    let call=useCallback(()=>{
      console.log('Call Back function ')
     
    },[])
  return (
    <div>
        
        B
        <button onClick={()=>{seta(a+1)}}>Click{a}</button>
        <button onClick={()=>{call()}}>Callback</button>
        <C/>
    </div>
  )
}

export default B