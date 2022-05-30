import Carousel from '../../components/Carousel'
import Title from '../../components/Title'
import Tag from '../../components/Tag'
import OwnerInfos from '../../components/OwnerInfos'
import Rate from '../../components/Rate'
import './style.css'

function AccommodationSheet() {
  return (
    <main className="main-content-wrapper main-content-wrapper--accommodation-sheet">
      <Carousel />
      <section className="Accommodation-infos">
        <div className="Main-accommodation-infos">
          <div className="Accommodation-title-and-tags">
            <Title />
            <ul className="Accommodation-tag-list">
              <Tag name="cozy" />
              <Tag name="canal" />
              <Tag name="paris 10" />
            </ul>
          </div>
          <div className="Owner-information-and-housing-rating">
            <OwnerInfos />
            <Rate />
          </div>
        </div>
      </section>
    </main>
  )
}

export default AccommodationSheet
