// Control panel with button to add a square
function ControlPanel({ onAdd, onDelete, onClear }) {
    return (
        <div>
            <button onClick={onAdd} className="btn-add">Add Square</button>
            <button onClick={onDelete} className="btn-delete" style={{ marginLeft: '12px' }}>
                Delete Square
            </button>
            <button onClick={onClear} className="btn-clear" style={{ marginLeft: '12px' }}>
                Clear All Squares
            </button>
        </div>
    );
}

export default ControlPanel;