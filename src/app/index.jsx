import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Router from '../utils/router'
import './style.css'

/**
 * The entry point of the React app rendering the router, header and footer.
 *
 * @returns {JSX.Element} The App component.
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
