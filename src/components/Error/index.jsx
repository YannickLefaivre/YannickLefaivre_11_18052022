import PropTypes from 'prop-types'
import './style.css'

function Error({ message }) {
  return (
    <div className="Error">
      <p className="Error__explanation">{message}</p>
    </div>
  )
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
}

Error.defaultProps = {
  message:
    'Une erreur est servenu lorsque nous avons essayé de récupérer les informations que vous vouliez consulter',
}

export default Error
