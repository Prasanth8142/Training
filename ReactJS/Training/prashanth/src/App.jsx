import React from 'react'
import store from './26-03-2026/B'
import { Provider } from 'react-redux'
import AP from './26-03-2026/Ap'
function App() {
  return (
    <div >
      <Provider store={store}>
        <AP/>
      </Provider>
      
    </div>
  )
}

export default App