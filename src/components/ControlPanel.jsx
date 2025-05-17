// Control panel with button to add a square
function ControlPanel({ onAdd, onDelete }) {
    return (
        <div>
            <button onClick={onAdd}>Add Square</button>
            <button onClick={onDelete} style={{ marginLeft: '8px' }}>
                Delete Square
            </button>
        </div>
    );
}

export default ControlPanel;