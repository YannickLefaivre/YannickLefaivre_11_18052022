import * as PropTypes from 'prop-types'
import './style.css'

function Banner({ bannerBackgroundImage, alternativeText }) {
  return (
    <div className="Banner">
      <div className="Banner__background-image">
        <img src={bannerBackgroundImage} alt={alternativeText} />
      </div>
      <h1 className="Banner__caption">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

Banner.propTypes = {
  bannerBackgroundImage: PropTypes.string.isRequired,
  alternativeText: PropTypes.string,
}

Banner.defaultProps = {
  bannerBackgroundImage: '',
  alternativeText: '',
}

export default Banner
