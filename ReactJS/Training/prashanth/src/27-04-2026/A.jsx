import React, { createContext, useState } from 'react'

   export let context= createContext()
function A() {
      let[A,useA]=useState(200)
  return (
    <div>
    <context.Provider value={{A,useA}}>
           One
           <Two/>
    </context.Provider>
        </div>
  )
}

export default A