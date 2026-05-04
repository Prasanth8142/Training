import React, { useEffect, useState } from 'react'

function Ab() {
  let [a,seta]=useState()
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((b)=>b.json())
  .then((a)=>{console.log(a)})
  return (
    <div>
      <div style={a.map((a)=>{a.title,a.userId})
        
      }>
      
      </div>
    </div>
  )
}

export default Ab