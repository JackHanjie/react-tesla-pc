import React, { memo } from 'react'
import Header from './components/Header'
import Home from './components/Home'



const App = memo(() => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
})

export default App