import React, { useState } from 'react'
import axios from 'axios'

function A() {
    let[email,setemail]=useState("")
   let[pass,setpass]= useState("")
   let [login,setlogin]= useState("")
   let event=()=>{
    axios.post("https://jsonplaceholder.typicode.com/posts",
    {
        title:1,
        email:email,
        password:pass
    })
    .then((e)=>{
        console.log(e.data)
        setlogin("Success")
        return axios.get("https://jsonplaceholder.typicode.com/posts")
    }  
    
)
.then((f)=>{
    console.log("All POSTS:")
    console.log(f.data)
    console.log(f.data[0])
})
.catch((f)=>{console.log(f)
    setlogin("Failed")
})
   }
  return (
    
    <div>
       <input onChange={(h)=>setemail(h.target.value)} type="email"   placeholder='Email'/> <br />
       <input  onChange={(h)=>{setpass(h.target.value)}} type="password"  placeholder='Password' /> <br />
       <button onClick={event} >Login</button>
       <p>
      {login}
       </p>
    </div>
    
  )
}

export default A