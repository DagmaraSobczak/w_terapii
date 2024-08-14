import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './stylesheet/common.css'
import './stylesheet/vars.css'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/w_terapii">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
