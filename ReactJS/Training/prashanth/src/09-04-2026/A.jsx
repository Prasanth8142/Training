import React from 'react'
import axios from 'axios'
function A() {
     axios.post("https://jsonplaceholder.typicode.com/posts")
     .then((D)=>{console.log(D.data)})
     
     
  return (
    <div>A</div>
  )
}

export default  A