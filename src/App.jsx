import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

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
      <CssBaseline/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  )
}

export default App
