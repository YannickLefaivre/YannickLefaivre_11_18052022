import { NavLink } from 'react-router-dom'
import logo from '../../assets/logos/logo-original.svg'
import './style.css'

export default function Header() {
  let navbarItemClassName = 'Header__navbar-item'

  return (
    <header className="Header">
      <img className="Header__logo" src={logo} alt="Logo de Kasa" />
      <nav className="Header__navbar">
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${navbarItemClassName} ${navbarItemClassName}--current-page`
                : `${navbarItemClassName}`
            }
            end
          >
            Acceuil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${navbarItemClassName} ${navbarItemClassName}--current-page`
                : `${navbarItemClassName}`
            }
          >
            A propos
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
