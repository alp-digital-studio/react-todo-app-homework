function TodoStats({ total, active, completed }) {
    return (
        <div className="stats">
            <div className="stat"><strong>{total}</strong><span>Total</span></div>
            <div className="stat"><strong>{active}</strong><span>Active</span></div>
            <div className="stat"><strong>{completed}</strong><span>Completed</span></div>
        </div>
    );
}
export default TodoStats;
