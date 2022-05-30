import Carousel from '../../components/Carousel'
import Title from '../../components/Title'
import Tag from '../../components/Tag'
import OwnerInfos from '../../components/OwnerInfos'
import Rate from '../../components/Rate'
import Dropdown from '../../components/Dropdown'
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

        <div className="Additional-accommodation-information">
          <Dropdown heading="Description">
            <p className="Dropdown__content Dropdown__content--description-of-the-accommodation">
              Vous serez à 50m du canal Saint-martin où vous pourrez
              pique-niquer l'été et à côté de nombreux bars et restaurants. Au
              cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement
              parfait pour les voyageurs en solo et les voyageurs d'affaires.
              Vous êtes à 1 station de la gare de l'est (7 minutes à pied).
            </p>
          </Dropdown>
          <Dropdown heading="Équipements">
            <ul className="Dropdown__content Dropdown__content--housing-equipment">
              <li>Climatisation</li>
              <li>Wi-Fi</li>
              <li>Cuisine</li>
              <li>Espace de travail</li>
              <li>Fer à repasser</li>
              <li>Sèche-cheveux</li>
              <li>Cintres</li>
            </ul>
          </Dropdown>
        </div>
      </section>
    </main>
  )
}

export default AccommodationSheet
