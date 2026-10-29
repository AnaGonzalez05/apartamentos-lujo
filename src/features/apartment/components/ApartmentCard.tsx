import { Link } from "react-router-dom";
import type { Apartment } from "../types/apartment";
import { useFavorites } from "../../favorite/hooks/useFavorites";
import "../styles/ApartmentCard.css";

interface ApartmentCardProps {
    apartment: Apartment;
}

const ApartmentCard = ({apartment}: ApartmentCardProps) => {
    const { isFavorite, toggleFavorite } = useFavorites();
    const favorite = isFavorite(apartment.id);

    return (
        <article className="apartmentCard">
                <img className="apartmentCardImage" src={apartment.image} alt={`Ilustración de ${apartment.name}`} />
                <h2 className="apartmentCardName">{apartment.name}</h2>
                <span className="apartmentCardDescription">{apartment.description}</span>
                <p className="apartmentCardLocation">{apartment.location}</p>
                <p className="apartmentCardPrice">₡{apartment.price} mil por noche</p>
                <Link className="apartmentCardLink" to={`/apartment/${apartment.id}`}>Ver detalles</Link>
                <button
                    type="button"
                    className={favorite ? "apartmentCardFavorite apartmentCardFavoriteActive" : "apartmentCardFavorite"}
                    onClick={() => toggleFavorite(apartment.id)}
                >
                    {favorite ? "Quitar de favoritos" : "Agregar favorito"}
                </button>
        </article>
    )
}

export default ApartmentCard;