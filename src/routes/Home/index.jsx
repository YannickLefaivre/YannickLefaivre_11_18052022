import homeBanner from '../../assets/banners/home-banner.jpg'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import './style.css'

function Home() {
  return (
    <main className="Home">
      <section>
        <Banner
          bannerBackgroundImage={homeBanner}
          alternativeText="view of a rocky seaside"
        />
        <Gallery />
      </section>
    </main>
  )
}

export default Home
