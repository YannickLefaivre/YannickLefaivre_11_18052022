import homeBanner from '../../assets/banners/home-banner.jpg'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import './style.css'

function Home() {
  return (
    <main className="main-content-wrapper main-content-wrapper--home-page">
      <section>
        <Banner
          bannerBackgroundImage={homeBanner}
          bannerText="Chez vous, partout et ailleurs"
        />
        <Gallery />
      </section>
    </main>
  )
}

export default Home
