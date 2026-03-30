import React, { createContext, useState } from 'react'
import Two from './Two'
   export let context= createContext()
function B() {
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

export default B