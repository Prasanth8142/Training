import React from 'react'
import C from './C'
import D from './D'

export const B = React.memo(() => {
    console.log("B Component")
  return (
    <div>
        <C/>
        <D/>
    </div>
  )
})