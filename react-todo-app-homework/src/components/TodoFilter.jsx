function TodoFilter({ filter, setFilter }) {
    const filters = ["All", "Active", "Completed"];

    return (
        <div className="filter-buttons">
            {filters.map(item => (
                <button
                    key={item}
                    className={filter === item ? "filter-button selected" : "filter-button"}
                    onClick={() => setFilter(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}
export default TodoFilter;
