import { Link } from "react-router-dom";
import type { Apartment } from "../types/apartment";

interface ApartmentCardProps {
    apartment: Apartment;
}

const ApartmentCard = ({apartment}: ApartmentCardProps) => {
    return (
        <article>
                <img className="apartmentCardImage" src={apartment.image} alt={`Ilustración de ${apartment.name}`} />
                <h1 className="apartmentCardName">{apartment.name}</h1>
                <span className="apartmentCardDescription">{apartment.description}</span>
                <p className="apartmentCardLocation">{apartment.location}</p>
                <p className="apartmentCardPrice">₡ {apartment.price} mil por noche</p>
                <Link className="apartmentCardLink" to={`/apartment/${apartment.id}`}>Ver detalles</Link>
        </article>
    )
}

export default ApartmentCard;