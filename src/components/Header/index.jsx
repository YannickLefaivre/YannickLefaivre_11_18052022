import { Link } from 'react-router-dom'
import logo from '../../assets/logos/logo-original.svg'
import './style.css'

export default function Header() {
  return (
    <header className="Header">
      <img className="Header__logo" src={logo} alt="Logo de Kasa" />
      <nav className="Header__navbar">
        <Link to="/">ACCEUIL</Link>
        <Link to="/about">A PROPOS</Link>
      </nav>
    </header>
  )
}
