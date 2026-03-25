import React from 'react'
import { store } from './25-03-2026/B'
import { Provider } from 'react-redux'
import A from './25-03-2026/A'
function App() {
  return (
    <div >
      <Provider store={store}>
        <A/>
      </Provider>
      
    </div>
  )
}

export default App