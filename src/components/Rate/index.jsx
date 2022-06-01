import PropTypes from 'prop-types'
import RateButton from '../RateButton'
import './style.css'

/**
 * Partially inspired by the tutorial for implementing the render of the accommodation rating
 * @see https://www.geeksforgeeks.org/how-to-create-a-rating-component-in-reactjs/
 * @tutorial How to create a rating component in ReactJS ?
 * @param {number} currentAccommodationRating
 */
function Rate({ currentAccommodationRating }) {
  return (
    <ul className="Rate">
      {[...Array(5)].map((item, index) => {
        return (
          <RateButton
            key={`rate-button-${index}`}
            isChecked={currentAccommodationRating >= index}
          />
        )
      })}
    </ul>
  )
}

Rate.propTypes = {
  currentAccommodationRating: PropTypes.number.isRequired,
}

Rate.defaultProps = {
  currentAccommodationRating: 0,
}

export default Rate
