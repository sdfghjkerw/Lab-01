import { useState } from 'react'
import './App.css'
import UserSearch from './SearchApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserSearch />
    </>
  )
}

export default App
