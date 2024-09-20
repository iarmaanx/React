import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Login />

  </StrictMode>,
)
