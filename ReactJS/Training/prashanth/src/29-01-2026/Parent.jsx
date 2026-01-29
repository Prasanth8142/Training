import React, { useState } from 'react'
import ChildB from './ChildB'
import ChildA from './ChildA'

function Parent() {
    let[A,setA]=useState("")
  return (
    <div>
        <ChildB value={setA}/>
        <ChildA value={A} />
    
    </div>
  )
}

export default Parent