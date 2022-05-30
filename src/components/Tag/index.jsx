import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.css'

function Tag({ name }) {
  return (
    <li className="Tag">
      <Link to={`/:search?byTag=${name}`}>{name}</Link>
    </li>
  )
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
}

Tag.defaultProps = {
  name: 'tag du logement',
}

export default Tag
