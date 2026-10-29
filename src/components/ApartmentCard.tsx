import { Link } from "react-router-dom";
import type { Apartment } from "../types/apartment";
import { useFavorites } from "../hooks/useFavorites";

interface ApartmentCardProps {
    apartment: Apartment;
}

const ApartmentCard = ({apartment}: ApartmentCardProps) => {
    const { isFavorite, toggleFavorite } = useFavorites();
    const favorite = isFavorite(apartment.id);

    return (
        <article>
                <img className="apartmentCardImage" src={apartment.image} alt={`Ilustración de ${apartment.name}`} />
                <h1 className="apartmentCardName">{apartment.name}</h1>
                <span className="apartmentCardDescription">{apartment.description}</span>
                <p className="apartmentCardLocation">{apartment.location}</p>
                <p className="apartmentCardPrice">₡ {apartment.price} mil por noche</p>
                <button
                    type="button"
                    className={favorite ? "apartmentCardFavorite apartmentCardFavoriteActive" : "apartmentCardFavorite"}
                    onClick={() => toggleFavorite(apartment.id)}
                >
                    {favorite ? "Quitar de favoritos" : "Agregar favorito"}
                </button>
                <Link className="apartmentCardLink" to={`/apartment/${apartment.id}`}>Ver detalles</Link>
        </article>
    )
}

export default ApartmentCard;