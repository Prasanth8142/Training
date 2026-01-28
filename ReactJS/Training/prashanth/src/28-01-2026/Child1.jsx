import React, { useState } from 'react'
import Parent1 from './Parent1'

function Child1() {
      let [A,B]=useState(100)
    let a=11
    console.log(a)

    let increse=()=>{
        B(A+1)
    }
  return (
    <div>
        <Parent1 Value={A}/>
        <button onClick={increse}>Increase</button>
    </div>
  )
}

export default Child1