import React from 'react'

function A() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((d)=>d.json())
    .then((s)=>{
     console.log(s)
     console.log(s[0])
    })
    
    .catch((response)=>{
        console.log('error')
    })
  return (
    <div>
        
    </div>
  )
}

export default A