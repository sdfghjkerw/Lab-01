import React from 'react'
import { ThemeProvider } from './context/ThemeContext'

import {
  ThemedButton,
  ThemedCard,
  ThemedText,
  ThemedInput,
  ThemedSwitcher,
} from './components/ThemedComponents'

function App() {
  return(
    <ThemeProvider>
      <div style={{padding:"24px", display:"flex", flexDirection:"column", gap:"16px", maxWidth:"600px", margin:"0 auto",}}>
        <ThemedSwitcher />
        <ThemedText variant='body'>
          демонстраия хок с паттерном темы
        </ThemedText>
        <ThemedCard elevated>
          <ThemedText variant="subtitle">Card component</ThemedText>
          <ThemedText variant="body">для светлой и темной темы</ThemedText>
        </ThemedCard>

        <div style={{display:'flex', gap:"10px"}}>
          <ThemedButton variant="primary">primary</ThemedButton>
          <ThemedButton variant="secondary">secondary</ThemedButton>
          <ThemedButton variant="outline">outline</ThemedButton>
        </div>
        <ThemedInput label="Email" placeholder="enter your email"/>
        <ThemedInput label="password" placeholder="enter password" error="password is requires"/>
      </div>
    </ThemeProvider>
  )
}

export default App
