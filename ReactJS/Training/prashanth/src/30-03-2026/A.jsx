import React, { useEffect, useState } from 'react'

function A() {
  let[a,seta]=useState([1])
 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((d)=> d.json())
    .then((d)=>{seta(d)})
    // console.log(a[0])
    
  },[])
  return (
    <div>Boy
         {a[0]?.id}

         {a.map((b)=>{
           return (<div key={b.id}>
         {b.id}
         {b.userId}
         {b.title}
           </div>)
         })}
        
      <button onClick={()=>{seta(a+1)}}>Click</button>
    </div>

   
  )
}

export default A