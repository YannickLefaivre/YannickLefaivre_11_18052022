import { Link } from 'react-router-dom'
import './style.css'

function NotFound() {
  return (
    <main className="main-content-wrapper main-content-wrapper--not-found-page">
      <h1 className="main-content__heading">404</h1>
      <p className="main-content__body">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="main-content__link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  )
}

export default NotFound
