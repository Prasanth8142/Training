import React from 'react'
import D from './D'

export const C = React.memo(() => {
    console.log("C Component")
  return (
    <div>
        C
        <D/>
    </div>
  )
})
