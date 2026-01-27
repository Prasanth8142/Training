import React from 'react'
import One from './One'

function Two() {
    let a=100
    function m(x){
        console.log(x)
    }
    m(1000)
  return (
    <div>
        <One value={m}/>
    </div>
  )
}

export default Two