import PropTypes from 'prop-types'
import './style.css'

function Tag({ name }) {
  return <li className="Tag">{name}</li>
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
}

Tag.defaultProps = {
  name: 'tag du logement',
}

export default Tag
