import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Navbar from './Components/Layout/Navbar/Navbar'
import Dashboard from './Components/Layout/Dashboard/Dashboard'
import { Context } from './Context/Context'
import NewPost from './Components/Layout/Newpost/Newpost'

function App() {
  const {dark} = useContext(Context);
  const Theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      primary: {
        main: "#2E0249"
      },
      secondary: {
        main: "#51C494"
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
      <Navbar />
      <Dashboard/>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
