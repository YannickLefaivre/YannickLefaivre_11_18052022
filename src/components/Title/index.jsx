import PropTypes from 'prop-types'
import './style.css'

function Title({ currentAccommodationTitle, currentAccommodationLocation }) {
  return (
    <div className="Title">
      <h1 className="Title__housing-title">{currentAccommodationTitle}</h1>
      <p className="Title__location-of-accommodation">
        {currentAccommodationLocation}
      </p>
    </div>
  )
}

Title.propTypes = {
  currentAccommodationLocation: PropTypes.string.isRequired,
  currentAccommodationTitle: PropTypes.string.isRequired,
}

Title.defaultProps = {
  currentAccommodationLocation: 'Localisation du logement',
  currentAccommodationTitle: 'Titre du logement',
}

export default Title
