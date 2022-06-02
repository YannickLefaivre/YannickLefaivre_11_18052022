import PropTypes from 'prop-types'
import './style.css'

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
