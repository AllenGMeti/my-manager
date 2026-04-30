// Importing StrictMode for highlighting potential problems in development
import { StrictMode } from 'react'
// Importing React 18's createRoot API for rendering
import { createRoot } from 'react-dom/client'
// Importing global styles
import './App.css'
// Importing the main App component
import App from './App'

// Render the App component inside the root div in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
