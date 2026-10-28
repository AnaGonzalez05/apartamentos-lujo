import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import type { Apartment } from '../types/apartment';
import StatusMessage from '../components/StatusMessage';

const ApartmentDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { data: apartments, isLoading, error } = useFetch<Apartment[]>("/data/apartments.json");
    const apartment = apartments?.find((item) => item.id === Number(id));

    if (isLoading || error) {
        return <StatusMessage isLoading={isLoading} error={error} loadingText="Cargando el apartamento..." />;
    }

    if (!apartment) {
        return (
            <div className='ApartmentDetailStatus-empty'>
                <h1>Apartamento no encontrado</h1>

                <Link className="backLink" to="/apartamentos">Volver al catalogo</Link>
            </div>
        );
    }

    return (
        <article className='ApartamentDetailPage'>
            <Link className="backLink" to="/apartamentos">Volver al catalogo</Link>
            <h1>{apartment.name}</h1>
            <img src={apartment.image} alt="Ilustracion del apartamento" />
            <span>{apartment.description}</span>
            <p>Incluye:</p>
            <ul>
                {apartment.amenities?.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                ))}
            </ul>
            <p>Ubicado en: {apartment.location}</p>
            <p>Cantidad de cuartos: {apartment.rooms}</p>
            <p>Cantidad de baños: {apartment.bathrooms}</p>
            <p>Area cuadrada: {apartment.area}</p>
            <p><strong>Precio: ₡ {apartment.price} mil por noche</strong></p>
        </article>
    )
}

export default ApartmentDetail
