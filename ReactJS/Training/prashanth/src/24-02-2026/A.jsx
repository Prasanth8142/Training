import axios from 'axios'
import React from 'react'

function A() {
    axios.put("https://jsonplaceholder.typicode.com/posts/2",
    {
      name:"PrashanthUpdated",
      age:26
    }
    )
    .then((c)=>console.log(c.data))
  
    axios.patch("https://jsonplaceholder.typicode.com/posts/2",
    {
      title:"title only change",
      age:26
    }
    )
    .then((f)=>console.log(f.data))
  return (
    <div>

    </div>
  )
}

export default A