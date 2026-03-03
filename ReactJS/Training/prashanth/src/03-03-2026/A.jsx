import React, { useState } from 'react'

function A() {
    let[a,setA]=useState({
        name:"Prashanth",
        age:26
    })
    console.log(a)
  return (
    <div>
        {a.name}
        {a.age}
        <button onClick={()=>{setA({name:"Sai",age:30})}}>Click</button>
    </div>
  )
}

export default A