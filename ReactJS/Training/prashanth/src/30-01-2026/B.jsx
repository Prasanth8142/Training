import React from 'react'
import D from './D'
import E from './E'
import F from './F'

function B({b}) {
    
  return (
    <div> B
        <D d={b}/>
        <E  e={b}/>
        <F f={b}/>
    </div>
  )
}

export default B