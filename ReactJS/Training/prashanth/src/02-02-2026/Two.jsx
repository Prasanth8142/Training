import React, { useContext } from 'react'
import { context } from './One'

function Two() {
    // console.log(context)
    let {A,useA}=useContext(context)
    console.log(A)
    console.log(useA)
  return (
    <div>
        TWO From One:{A}
        <button onClick={()=>useA(A+1)}>Click</button>
        </div>
  )
}

export default Two