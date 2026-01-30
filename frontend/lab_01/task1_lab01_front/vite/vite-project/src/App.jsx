import { useState } from 'react'
import ToggleComponent from './viteversion'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ToggleComponent/>
    </>
  )
}

export default App
