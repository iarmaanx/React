import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import InputBox from './components/InputBox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <InputBox />
  </StrictMode>,
)
