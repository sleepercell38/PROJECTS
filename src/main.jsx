import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authprovider from './contexts/Authprovider.jsx'




createRoot(document.getElementById('root')).render(

   <Authprovider>
            <App />
     </Authprovider>

)
