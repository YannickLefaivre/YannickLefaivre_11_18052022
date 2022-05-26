import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import './style.css'

function Home() {
  return (
    <main className="Home">
      <section>
        <Banner />
        <Gallery />
      </section>
    </main>
  )
}

export default Home
