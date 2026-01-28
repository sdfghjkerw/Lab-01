import { useState } from 'react'
import UserContext from './UserContext'
import UserProvider from './UserProvider'
import Dashboard from './Dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  )
}

export default App
