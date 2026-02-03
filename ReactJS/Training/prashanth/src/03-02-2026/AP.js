import { createStore } from "redux";


let intial={sum:50}

function reducer(state=intial,Actions){
   switch (Actions.type) {
    case "a":
        return{state,sum:state.sum+1}
        break;
        case "b":
            return {state,sum:state.sum-1}
            break
   
    default:
        return state
        break;
   }
}

export let store=createStore(reducer)