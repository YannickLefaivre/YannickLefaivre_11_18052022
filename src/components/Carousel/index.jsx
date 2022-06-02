import { useState } from 'react'
import PropTypes from 'prop-types'
import './style.css'

function Carousel({ currentAccommodationPictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextPictureIndex =
    currentIndex + 1 > currentAccommodationPictures.length - 1
      ? 0
      : currentIndex + 1
  const previousPictureIndex =
    currentIndex - 1 < 0
      ? currentAccommodationPictures.length - 1
      : currentIndex - 1

  return (
    <div id="carousel" className="Carousel">
      {currentAccommodationPictures && (
        <img
          className="Carousel__picture"
          src={`${currentAccommodationPictures[currentIndex]}`}
          alt="Intérieure du logement"
        />
      )}
      <p className="Carousel__current-index-indicator">{`${currentIndex + 1}/${
        currentAccommodationPictures.length
      }`}</p>
      {currentAccommodationPictures.length > 1 && (
        <a
          className="Carousel__navigation-button Carousel__navigation-button--previous-picture"
          href="#carousel"
          onClick={() => setCurrentIndex(previousPictureIndex)}
        >
          <svg width="11.67" height="19.8" viewBox="0 0 48 80" fill="none">
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
        </a>
      )}
      {currentAccommodationPictures.length > 1 && (
        <a
          className="Carousel__navigation-button Carousel__navigation-button--next-picture"
          href="#carousel"
          onClick={() => setCurrentIndex(nextPictureIndex)}
        >
          <svg width="11.67" height="19.8" viewBox="0 0 48 80" fill="none">
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </a>
      )}
    </div>
  )
}

Carousel.propTypes = {
  currentAccommodationPictures: PropTypes.array.isRequired,
}

Carousel.defaultProps = {
  currentAccommodationPictures: [],
}

export default Carousel
