import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './base-style.css'
import App from './routes/App'
import Home from './routes/Home'
import AccommodationSheet from './routes/AccommodationSheet'
import About from './routes/About'
import NotFound from './routes/NotFound'

const root = ReactDOM.createRoot(document.body.querySelector('#root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/accommodation-sheet/:id"
            element={<AccommodationSheet />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
