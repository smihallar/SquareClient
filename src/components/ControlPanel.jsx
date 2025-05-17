// Control panel with button to add a square
function ControlPanel({ onAdd }) {
    return (
        <div>
            <button onClick={onAdd}>Add Square</button>
        </div>
    );
}

export default ControlPanel;