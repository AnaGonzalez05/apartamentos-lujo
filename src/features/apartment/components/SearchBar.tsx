interface SearchBarProps {
    search: string;
    onSearchChange: (value: string) => void;
}

const SearchBar = ({ search, onSearchChange }: SearchBarProps) => {
    return (
        <label className="search-bar">
            <span className="search-bar__label">Encuentra tu próximo apartamento</span>
            <input
                className="search-bar__input"
                type="search"
                placeholder="Buscar apartamento por nombre..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </label>
    );
};

export default SearchBar;