import React from 'react'
import B from './B'
function A() {
   let a1=(data)=>{
console.log('child data',data)
   }
    
  return (
    <div>
        
        <B parent={a1}/>
    </div>
  )
}


export default A