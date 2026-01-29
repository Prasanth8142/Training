import React from 'react'

function ChildB(p) {
    // console.log(p.value)
  return (
    <div>
        <button onClick={()=>p.value("Hai from childB")}>Click me</button>
    </div>
  )
}

export default ChildB