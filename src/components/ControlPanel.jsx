// Control panel with button to add a square
function ControlPanel({ onAdd, onDelete, onClear }) {
    return (
        <div>
            <button onClick={onAdd}>Add Square</button>
            <button onClick={onDelete} style={{ marginLeft: '8px' }}>
                Delete Square
            </button>
            <button onClick={onClear} style={{ marginLeft: '8px' }}>
                Clear All Squares
            </button>
        </div>
    );
}

export default ControlPanel;