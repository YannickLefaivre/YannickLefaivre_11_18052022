import { Link } from 'react-router-dom'
import './style.css'

export default function Thumbnail() {
  return (
    <article className="Thumbnail">
      <Link className="Thumbnail__link" to="/accommodation-sheet/">
        <div className="Thumbnail__link-image-container"></div>
        <h2 className="Thumbnail__link-title">
          Titre de la
          <br />
          location
        </h2>
      </Link>
    </article>
  )
}
