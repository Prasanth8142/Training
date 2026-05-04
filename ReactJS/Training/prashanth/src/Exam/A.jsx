import React, { useState } from 'react'

function A() {
  let[a,seta]=useState(100)
  function array(){
    console.log('Button Clicked')
  }
  return (
    <div>A
      <button onClick={}>Button</button>
      <button type='numbers'>Button</button>
      <button value={a}></button>
    </div>
  )
}

export default Ak