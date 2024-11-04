import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authcontext from './contexts/Authcontext.jsx'
import Taskcontext from './contexts/Taskcontext.jsx'



createRoot(document.getElementById('root')).render(
   
            <App />
         
)
