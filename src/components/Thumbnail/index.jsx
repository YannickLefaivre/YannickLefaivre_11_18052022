import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.css'

function Thumbnail({ id, title, cover }) {
  return (
    <article className="Thumbnail">
      <Link className="Thumbnail__link" to={`/accommodation-sheet/${id}`}>
        <img className="Thumbnail__link-image" src={cover} alt="" />
        <h2 className="Thumbnail__link-title">{title}</h2>
      </Link>
    </article>
  )
}

Thumbnail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

Thumbnail.defaultProps = {
  id: '',
  title: 'Titre de la location',
  cover: '',
}

export default Thumbnail
