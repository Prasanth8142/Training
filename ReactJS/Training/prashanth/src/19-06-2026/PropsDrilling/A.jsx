import React from 'react'
import B from './B'
import C from './C'

function A() {
    let a="Prashanth"
  return (
    <div>
        <B a={a}/>
      <C a={a}/>
     
    </div>
    
  )
}

export default A