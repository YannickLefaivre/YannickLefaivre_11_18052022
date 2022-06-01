import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './utils/styles/sr-only.css'
import App from './app'

const root = ReactDOM.createRoot(document.body.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
