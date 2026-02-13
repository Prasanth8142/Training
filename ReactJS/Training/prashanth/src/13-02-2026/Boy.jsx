import React, { useEffect, useState } from 'react'

function Boy() {
  let[a,seta]=useState([1])
 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((d)=> d.json())
    .then((d)=>{seta(d)})
    // console.log(a[0])
    
  },[])
  return (
    <div>Boy
         <h1>{a[0]?.id}</h1>

         {a.map((b)=>{
           return (<div key={b.id}>
         <h1>{b.id}</h1>
         <h2>{b.userId}</h2>
         <h3>{b.title}</h3>
           </div>)
         })}
        
      <button onClick={()=>{seta(a+1)}}>Click</button>
    </div>

   
  )
}

export default Boy