import { useFetch } from '../../utils/hooks'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
import aboutBanner from '../../assets/banners/about-banner.jpg'
import './style.css'

/**
 * Display the about page with company values ​​and a banner without a caption.
 *
 * @returns {JSX.Element} The About component
 */
function About() {
  const { isLoading, data, error } = useFetch('/kasa-values.json')

  return (
    <main className="main-content-wrapper main-content-wrapper--about-page">
      {error ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="About-page-main-content">
          <Banner
            bannerBackgroundImage={aboutBanner}
            styleModifier={{
              bannerContainer: 'Banner--about-page',
              backgroundImageContainer: 'Banner__background-image--about-page',
            }}
          />
          <div className="About-page-main-content__kasa-values">
            {data &&
              data.map((kasaValue) => (
                <Dropdown
                  key={`${kasaValue.title}`}
                  label={kasaValue.title}
                  styleModifier={{
                    dropdownContainer: 'Dropdown--about-page',
                    triggerAndLabelContainer:
                      'Dropdown-trigger-and-label-container--about-page',
                    label: 'Dropdown__label--about-page',
                    trigger: 'Dropdown__trigger--about-page',
                    triggerIcon: 'Dropdown__trigger__icon--about-page',
                  }}
                >
                  <p className="Dropdown__content Dropdown__content--about-page">
                    {kasaValue.description}
                  </p>
                </Dropdown>
              ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default About
