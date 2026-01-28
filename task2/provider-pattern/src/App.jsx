import { useState } from 'react'
import UserContext from './UserContext'
import UserProvider from './UserProvider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProvider>
      
    </UserProvider>
  )
}

export default App
