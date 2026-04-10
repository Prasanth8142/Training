import React, { useState } from 'react'
import { B } from './B'
function A() {
    let [a,b]=useState(0)
    console.log("A Component")
  return (
    <div>
        <button onClick={()=>{b(a+1)}}>Increase{a}</button>
        <B />
    </div>
  )
} 

export default A