import React from 'react'
import One from './27-01-2026/One'
import Two from './27-01-2026/Two'
import Child from './28-01-2026/Child'
import Child1 from './28-01-2026/Child1'
import Parent from './30-01-2026/Parent'
import { store } from './03-02-2026/AP'
import { Provider } from 'react-redux'
import A from './03-02-2026/A'
function App() {


  return (
    
    <>
    <Provider store={store}>
   <A/>
    </Provider>
    </>
   
  )
}

export default App
