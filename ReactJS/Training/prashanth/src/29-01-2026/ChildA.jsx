import React from 'react'

function ChildA(s) {
    console.log(s.value)
  return (
    <div>{s.value}</div>
  )
}

export default ChildA