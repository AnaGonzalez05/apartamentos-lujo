interface FilterSelectProps {
    label: string;
    value: string;
    options: { value: string; label: string }[];
    allLabel: string;
    onChange: (value: string) => void;
}

const FilterSelect = ({ label, value, options, allLabel, onChange }: FilterSelectProps) => {
    return (
        <label className="filter-select">
            <span>{label}</span>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="">{allLabel}</option>
                {options.map((op) => (
                    <option key={op.value} value={op.value}>{op.label}</option>
                ))}
            </select>
        </label>
    );
};

export default FilterSelect;