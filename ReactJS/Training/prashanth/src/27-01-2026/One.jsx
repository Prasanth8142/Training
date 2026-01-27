import React from 'react'

function One(g) {
console.log(g.value)
  return (
    <h1>This is parent to child{g.value}</h1>
  )
}

export default One