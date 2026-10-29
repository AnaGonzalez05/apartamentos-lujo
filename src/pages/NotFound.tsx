import { Link } from 'react-router-dom'
import '../styles/notFound.css'

function NotFound() {
  return (
    <section className="not-found">
      <h1>Página no encontrada</h1>
      <h2>Lo sentimos, la página que estás buscando no existe.</h2>

      <Link className="btn-gold" to="/">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound