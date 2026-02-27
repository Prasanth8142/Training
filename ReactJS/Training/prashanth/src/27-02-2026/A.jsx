
import React, { createContext, useContext, useState } from 'react'
import B from './B'
      export let context=createContext()
function A() {
  let [a,setA]=useState(200)
  return (
    <context.Provider value={{a,setA}}>
      <B/>
    </context.Provider>
  )
}

export default A