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
            Exclusividad arquitectónica y serenidad frente al horizonte más
            codiciado de Costa Rica.
          </p>
          <p className="footer__badge">Adquisiciones privadas disponibles</p>
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
            contacto@ejemplo.cr
          </p>
          <p>
            <span className="footer__label">Teléfono</span>
            +506 0000 0000
          </p>
          <p>
            <span className="footer__label">Ubicación</span>
            San José, Costa Rica
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} {BRAND}. Proyecto académico.
        </p>
      </div>
    </footer>
  )
}

export default Footer