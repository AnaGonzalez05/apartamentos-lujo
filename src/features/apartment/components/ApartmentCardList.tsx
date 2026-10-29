import type { Apartment } from "../types/apartment";
import ApartmentCard from "./ApartmentCard";

interface ApartmentListProps {
    apartment: Apartment[];
}

const ApartmentCardList = ({ apartment }: ApartmentListProps) => {
    return (
        <div className="apartmentCardListContainer">
            {apartment.map((apartment) => (
                <ApartmentCard
                    key={apartment.id}
                    apartment={apartment}
                />
            ))}
        </div>
    );
}

export default ApartmentCardList;