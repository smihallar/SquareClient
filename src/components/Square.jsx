// This component renders a square with specified x, y coordinates and color.
function Square({ x, y, color }) {
    return (
        <div
            className="square"
            style={{
                gridColumn: x + 1,
                gridRow: y + 1,
                background: color,
            }}
        />
    );
}

export default Square;