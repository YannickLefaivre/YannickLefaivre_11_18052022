import { Link } from 'react-router-dom'
import './style.css'

export default function Thumbnail({ id, title, cover }) {
  return (
    <article className="Thumbnail">
      <Link className="Thumbnail__link" to={`/accommodation-sheet/${id}`}>
        <img className="Thumbnail__link-image" src={cover} alt="" />
        <h2 className="Thumbnail__link-title">{title}</h2>
      </Link>
    </article>
  )
}
