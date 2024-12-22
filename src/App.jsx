import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Navbar from './Components/Layout/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const Theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#2E0249"
      },
      secondary: {
        main: "#570A57"
      },
      error: {
        main: "#FF2929"
      },
      success: {
        main: "#54B435"
      },
      info: {
        main: "#C6E7FF"
      },
      text: {
        main: "#171010"
      }
    }
  })
  return (
    <ThemeProvider theme={Theme}>
      <Navbar/>
      <CssBaseline/>
    </ThemeProvider>
  )
}

export default App
