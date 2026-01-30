import React, { useState } from 'react'
import B from './B'
import C from './C'

function A() {
    let[A,seta]=useState(10)

  return (
    <div>A:{A}

       <B b={A}/>
       <C c={A}/>
    </div>
  )
}

export default A