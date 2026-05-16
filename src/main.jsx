import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' // ይህ መስመር የ Tailwind CSS ህግጋትን ወደ ሙሉ ሲስተሙ ያስገባል

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)