import logo from '../../assets/logos/logo-black-and-white.svg'
import './style.css'

export default function Footer() {
  return (
    <footer className="Footer">
      <img src={logo} alt="Logo de Kasa" />
      <p className="Footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
