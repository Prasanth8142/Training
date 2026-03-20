import React from 'react'
import C from './C'
let a2=2000
function B({parent}) {
    parent("200")
  
  return (
    <div>
        <C value={a2}/>
      </div>
  )
}

export default B