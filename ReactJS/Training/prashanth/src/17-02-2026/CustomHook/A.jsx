import React, { useState } from 'react'

function A() {
    let[state,setstate]=useState([])
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((d)=>d.json())
    .then((e)=>{})
    
  return (
    <div>A</div>
  )
}

export default A