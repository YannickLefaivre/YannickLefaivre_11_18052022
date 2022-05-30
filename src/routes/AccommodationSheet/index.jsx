import Carousel from '../../components/Carousel'
import Title from '../../components/Title'
import Tag from '../../components/Tag'
import './style.css'

function AccommodationSheet() {
  return (
    <main className="main-content-wrapper main-content-wrapper--accommodation-sheet">
      <Carousel />
      <div className="Accommodation-title-and-tags">
        <Title />
        <ul className="Accommodation-tag-list">
          <Tag name="cozy" />
          <Tag name="canal" />
          <Tag name="paris 10" />
        </ul>
      </div>
    </main>
  )
}

export default AccommodationSheet
