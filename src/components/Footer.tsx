import { Link } from 'react-router-dom'
import '../styles/footer.css'

const BRAND = 'Aurélis'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <h2 className="footer__logo">{BRAND}</h2>
          <p>
            Mas de 5 años de experiencia en el mercado inmobiliario, contactanos
             y te ayudaremos a encontrar tu hogar ideal.
          </p>
        </div>

        <nav className="footer__col" aria-label="Enlaces del pie de página">
          <h3>Navegación</h3>
          <Link to="/">Inicio</Link>
          <Link to="/apartamentos">Apartamentos</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        <div className="footer__col">
          <h3>Contacto</h3>
          <p>
            <span className="footer__label">Correo</span>
            aurelis@aparments.cr
          </p>
          <p>
            <span className="footer__label">Teléfono</span>
            +506 6980 1234
          </p>
          <p>
            <span className="footer__label">Ubicación</span>
            Alajuela, Costa Rica
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} {BRAND}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer