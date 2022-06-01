import PropTypes from 'prop-types'
import './style.css'

function RateButton({ isChecked }) {
  return (
    <li className="Rate-button-container">
      <button className="Rate-button">
        <svg
          className={
            isChecked
              ? 'Rate-button__icon Rate-button__icon--checked-state'
              : 'Rate-button__icon'
          }
          width="15"
          height="15"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </li>
  )
}

RateButton.propTypes = {
  isChecked: PropTypes.bool.isRequired,
}

RateButton.defaultProps = {
  isChecked: false,
}

export default RateButton
