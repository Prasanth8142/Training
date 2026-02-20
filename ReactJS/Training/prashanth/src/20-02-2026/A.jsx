import React from 'react'
import B from './B'

function A() {
    console.log('A Component:')
  return (
    <div>A
        <B/>
    </div>
  )
}

export default A