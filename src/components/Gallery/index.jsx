import { useFetch } from '../../utils/hooks'
import Thumbnail from '../Thumbnail'
import Error from '../Error'
import Loader from '../Loader'
import './style.css'

/**
 * Display accommodation thumbnail gallery.
 *
 * @returns {JSX.Element} The Gallery component.
 */
export default function Gallery() {
  const { isLoading, data, error } = useFetch('/logements.json')

  if (error) {
    return <Error />
  }

  return (
    <div className="Gallery">
      {isLoading ? (
        <Loader />
      ) : (
        data.map((accommodation) => (
          <Thumbnail
            key={`accommodation-${accommodation.id}`}
            id={accommodation.id}
            title={accommodation.title}
            coverURL={accommodation.cover}
          />
        ))
      )}
    </div>
  )
}
