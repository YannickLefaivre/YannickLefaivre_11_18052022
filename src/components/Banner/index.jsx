import PropTypes from 'prop-types'
import './style.css'

/**
 * Display a banner with a background image and optional caption
 *
 * @param {Object} [props] - The function component props
 * @param {string} [props.bannerBackgroundImage=""] - The image background of the banner.
 * @param {string} [props.bannerText=""] - The caption of the banner.
 * @param {boolean} [props.isAChildOfAboutComponent=false] - Enables (if true) and disables (if false) the display of the banner caption.
 * @returns {JSX.Element} the Banner component.
 */
function Banner({
  bannerBackgroundImage,
  bannerText,
  isAChildOfAboutComponent,
}) {
  const aboutPageModifierSuffix = '--about-page'
  const whiteSpace = ' '
  const blankString = ''

  return (
    <div
      className={`Banner${
        isAChildOfAboutComponent
          ? `${whiteSpace}Banner${aboutPageModifierSuffix}`
          : blankString
      }`}
    >
      <div
        className={`Banner__background-image${
          isAChildOfAboutComponent
            ? `${whiteSpace}Banner__background-image${aboutPageModifierSuffix}`
            : blankString
        }`}
      >
        <img src={bannerBackgroundImage} alt={bannerText} />
      </div>
      {!isAChildOfAboutComponent && (
        <h1 className="Banner__caption">{bannerText}</h1>
      )}
    </div>
  )
}

Banner.propTypes = {
  bannerBackgroundImage: PropTypes.string.isRequired,
  bannerText: PropTypes.string.isRequired,
  isAChildOfAboutComponent: PropTypes.bool.isRequired,
}

Banner.defaultProps = {
  bannerBackgroundImage: '',
  bannerText: '',
  isAChildOfAboutComponent: false,
}

export default Banner
