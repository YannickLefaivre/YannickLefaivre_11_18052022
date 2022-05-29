import placeholderImage from '../../assets/placeholders/picture.jpg'
import { Link } from 'react-router-dom'
import './style.css'

function Carousel() {
  return (
    <div className="Carousel">
      <img
        className="Carousel__picture"
        src={placeholderImage}
        alt="placeholder"
      />
      <p className="Carousel__current-index-indicator">1/4</p>
      <Link
        className="Carousel__navigation-button Carousel__navigation-button--previous-picture"
        to="/accommodation-sheet/c67ab8a7"
      >
        <svg width="11.67" height="19.8" viewBox="0 0 48 80" fill="none">
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
      </Link>
      <Link
        className="Carousel__navigation-button Carousel__navigation-button--next-picture"
        to="/accommodation-sheet/c67ab8a7"
      >
        <svg width="11.67" height="19.8" viewBox="0 0 48 80" fill="none">
          <path
            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  )
}

export default Carousel
