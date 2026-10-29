import { useState } from 'react'
import ApartmentCardList from "../components/ApartmentCardList";
import type { Apartment } from '../types/apartment';
import Pagination from "../../../components/Pagination";
import FilterSelect from '../components/FilterSelect';
import SearchBar from '../components/SearchBar';
import StatusMessage from "../../../components/StatusMessage";
import { useFetch } from "../../../hooks/useFetch";
import "../styles/Apartments.css";

const Apartments = () => {
    const { data: apartments, isLoading, error } = useFetch<Apartment[]>("/data/apartments.json");

    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [rooms, setRooms] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const apartmentsPerPage = 5;

    const handleSearchChange = (value: string) => {
        setSearch(value);
        setCurrentPage(1);
    };
    const handleLocationChange = (value: string) => {
        setLocation(value);
        setCurrentPage(1);
    };
    const handleRoomsChange = (value: string) => {
        setRooms(value);
        setCurrentPage(1);
    };

    const allApartments = apartments ?? [];

    const locationOptions = [...new Set(allApartments.map((a) => a.location))]
        .sort()
        .map((loc) => ({ value: loc, label: loc }));

    const roomsOptions = [...new Set(allApartments.map((a) => a.rooms))]
        .sort((a, b) => a - b)
        .map((r) => ({ value: String(r), label: `${r} ${r === 1 ? "cuarto" : "cuartos"}` }));

    const filteredApartments = allApartments.filter(
        (apartment) =>
            apartment.name.toLowerCase().includes(search.toLowerCase()) &&
            (location === "" || apartment.location === location) &&
            (rooms === "" || apartment.rooms === Number(rooms))
    );

    const indexOfLastApartment = currentPage * apartmentsPerPage;
    const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage;
    const currentApartments = filteredApartments.slice(indexOfFirstApartment, indexOfLastApartment);
    const totalPages = Math.ceil(filteredApartments.length / apartmentsPerPage);

    if (isLoading || error) {
        return <StatusMessage isLoading={isLoading} error={error} loadingText="Cargando apartamentos..." />;
    }

    return (
        <main className="container apartments-page">
            <h1>Lista de Apartamentos</h1>

            <div className="filters">
                <SearchBar search={search} onSearchChange={handleSearchChange} />
                <FilterSelect
                    label="Ubicación"
                    value={location}
                    options={locationOptions}
                    allLabel="Todas"
                    onChange={handleLocationChange}
                />
                <FilterSelect
                    label="Cuartos"
                    value={rooms}
                    options={roomsOptions}
                    allLabel="Cualquiera"
                    onChange={handleRoomsChange}
                />
            </div>

            {filteredApartments.length > 0 ? (
                <ApartmentCardList apartment={currentApartments} />
            ) : (
                <p className="apartmentsPageEmpty" role="status">
                    No encontramos apartamentos con esos filtros. Prueba con otra búsqueda.
                </p>
            )}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPrevious={() => setCurrentPage((page) => Math.max(1, page - 1))}
                onNext={() => setCurrentPage((page) => Math.max(1, Math.min(totalPages, page + 1)))}
            />
        </main>
    );
};

export default Apartments;
