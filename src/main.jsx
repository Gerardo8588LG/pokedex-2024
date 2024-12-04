import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { NameProvider } from './contexts/namecontexts.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NameProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NameProvider>
  </StrictMode>,
)
