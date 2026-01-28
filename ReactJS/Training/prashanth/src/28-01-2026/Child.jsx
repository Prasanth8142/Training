import React, { useState } from 'react'
import Use from './Parent'

function Use1() {
  let a=10
  console.log(a)
  let [A,B]=useState(1000)
  console.log(A)
  console.log(B)
  function m(a){
    a++
    console.log(a)
  }
  let inc=()=>{
  B(A+1)
  }
  
  return (
    <div>
        <Use Value={A}/>
        <button onClick={()=>{m(a)}}>Increase</button>
        <button onClick={inc}> Click</button>
    </div>
  )
}

export default Use1