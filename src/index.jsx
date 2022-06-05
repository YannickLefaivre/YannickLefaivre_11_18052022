import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app'

/**
 * Lets render React 18 app in root div.
 */
const root = ReactDOM.createRoot(document.body.querySelector('#root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
