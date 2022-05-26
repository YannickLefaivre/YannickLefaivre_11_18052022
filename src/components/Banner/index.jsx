import homeBanner from '../../assets/banners/home-banner.jpg'
import './style.css'

export default function Banner() {
  return (
    <div className="Banner">
      <div className="Banner__background">
        <img src={homeBanner} alt="view of a rocky seaside" />
      </div>
      <h1 className="Banner__caption">Chez vous, partout et ailleurs</h1>
    </div>
  )
}
