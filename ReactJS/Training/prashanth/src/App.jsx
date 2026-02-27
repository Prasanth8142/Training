import React, { useState } from 'react'
import DataBinding from './16-02-2026/Databinding'
import Login from './16-02-2026/Login'
// import A from './18-02-2026/A'
import B from './17-02-2026/B'
import Layout from './17-02-2026/Layout'
// import A from './24-02-2026/25-02-2026/A'
// import A from './24-02-2026/A'
// import A from './23-02-2026/A'
// import A from './20-02-2026/A'
// import A from './19-02-2026/A'
// import A from './18-02-2026/A'
import store from './26-02-2026/B'
 import { Provider } from 'react-redux'
import AP from './26-02-2026/AP'

function App() {
  // let[state,setstate]=useState(true)
  // console.log(state)
  // console.log(setstate)
  return (
    <Provider store={store}>
      <AP/>
    </Provider>
      
     
   
    )
}

export default App