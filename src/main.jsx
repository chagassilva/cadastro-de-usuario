
import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from "./Styles/GlobalStyles.js"
import { RouterProvider } from 'react-router-dom'
import router from '../src/routes.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,

)


//<RouterProvider router={router} />

//<Home />