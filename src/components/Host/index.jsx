import PropTypes from 'prop-types'
import './style.css'

function Host({ hostName, hostPicture }) {
  return (
    <div className="Host">
      <p className="Host__name">{hostName}</p>
      <div className="Host__profil-picture">
        {hostPicture && <img src={hostPicture} alt="" />}
      </div>
    </div>
  )
}

Host.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPicture: PropTypes.string.isRequired,
}

Host.defaultProps = {
  hostName: "Nom de l'hôte",
  hostPicture: '',
}

export default Host
