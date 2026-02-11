import React, { useReducer } from 'react'

let data={
    count:0
}

function reducer(state,action){
    switch (action.type) {
        case 'a':
            return {count:state.count+1}
            break;
            case 'b':
                return {count:state.count-1}
            break;
        default:
            return state
            break;
    }
}
function Reducer() {

    let [a,seta]=useReducer(reducer,data)
    console.log(a)

  return (
    <div>
        <button onClick={()=>seta({type:"a"})}>Increase</button>
        <button onClick={()=>seta({type:"b"})}>Decrease</button>
        
    </div>
  )
}

export default Reducer