import React, { useState } from 'react'
  import B from './B'
function A() {
   let [a,setA]= useState(1)
  return (
    <div>
        <B value={a}/>
    </div>
  )
}

export default A