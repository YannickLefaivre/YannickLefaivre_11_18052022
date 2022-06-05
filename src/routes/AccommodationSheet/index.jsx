import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import Carousel from '../../components/Carousel'
import Title from '../../components/Title'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rate from '../../components/Rate'
import Dropdown from '../../components/Dropdown'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
import NotFound from '../NotFound'
import './style.css'

/**
 * Display the listing of the accommodation whose id is stored in the url after the user clicks on his card on the home page.
 *
 * @returns {JSX.Element} The AccommodationSheet component.
 */
function AccommodationSheet() {
  const { isLoading, data, error } = useFetch('/logements.json')
  const { id } = useParams()

  if (id.match(/^[a-z0-9]{8}$/i) === null) {
    return <NotFound />
  }

  const currentAccommodation = data?.find(
    (accommodation) => accommodation.id === id
  )

  console.log('Current accommodation:', currentAccommodation)

  return (
    <main className="main-content-wrapper main-content-wrapper--accommodation-sheet">
      {error ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : (
        <section className="Accommodation-infos">
          {currentAccommodation && (
            <Carousel
              currentAccommodationPicturesURLs={currentAccommodation.pictures}
            />
          )}
          <div className="Main-accommodation-infos">
            <div className="Accommodation-title-and-tags">
              {currentAccommodation && (
                <Title
                  currentAccommodationLocation={currentAccommodation.location}
                  currentAccommodationTitle={currentAccommodation.title}
                />
              )}
              <ul className="Accommodation-tag-list">
                {currentAccommodation &&
                  currentAccommodation.tags.map((tagName) => (
                    <Tag key={tagName} name={tagName} />
                  ))}
              </ul>
            </div>
            <div className="Accommodation-host-and-rate">
              {currentAccommodation && (
                <Host
                  hostName={currentAccommodation.host.name}
                  hostPictureURLs={currentAccommodation.host.picture}
                />
              )}
              {currentAccommodation && (
                <Rate
                  currentAccommodationRating={parseInt(
                    currentAccommodation.rating
                  )}
                />
              )}
            </div>
          </div>

          <div className="Additional-accommodation-information">
            <Dropdown label="Description">
              <p className="Dropdown__content Dropdown__content--description-of-the-accommodation">
                {currentAccommodation && currentAccommodation.description}
              </p>
            </Dropdown>
            <Dropdown label="Équipements">
              <ul className="Dropdown__content Dropdown__content--housing-equipment">
                {currentAccommodation &&
                  currentAccommodation.equipments.map((equipment) => (
                    <li key={`${equipment}`}>{equipment}</li>
                  ))}
              </ul>
            </Dropdown>
          </div>
        </section>
      )}
    </main>
  )
}

export default AccommodationSheet
