import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useFavorites } from '../hooks/useFavorites'
import ApartmentCard from '../components/ApartmentCard'
import type { Apartment } from '../types/apartment'
import '../styles/favorites.css'

function Favorites() {
  const {
    data: apartments,
    isLoading,
    error,
  } = useFetch<Apartment[]>('/data/apartments.json')
  const { favorites } = useFavorites()

  const favoriteApartments = (apartments ?? []).filter((apartment) =>
    favorites.includes(apartment.id),
  )

  if (isLoading) {
    return <p className="container favorites__status">Cargando favoritos...</p>
  }

  if (error) {
    return (
      <p role="alert" className="container favorites__status">
        {error}
      </p>
    )
  }

  return (
    <section className="container favorites">
      <h1>Mis favoritos</h1>

      {favoriteApartments.length === 0 ? (
        <div className="favorites__empty">
          <p>Aún no tienes apartamentos guardados.</p>
          <Link className="btn-gold" to="/apartamentos">
            Explorar apartamentos
          </Link>
        </div>
      ) : (
        <div className="favorites__grid">
          {favoriteApartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Favorites