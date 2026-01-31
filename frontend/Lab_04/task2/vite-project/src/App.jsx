import { useState } from 'react'
import './App.css'
import UserProfile from './UserProfile'
import UserProfile2 from './UserProfile2'

function App() {
  return (
    <>
      <h2>1 таск 0.2</h2>
      <UserProfile/>
      <h2>2 таск 0.2</h2>
      <UserProfile2 />
      <h2>3 таск 0.2</h2>
      <UserApp/>
    </>
  )
}

export default App
