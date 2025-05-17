// React component to display a grid of squares with specified colors and positions
import Square from "./Square";

function SquareGrid({ squares }) {
    const maxX = Math.max(0, ...squares.map(sq => sq.x));
    const maxY = Math.max(0, ...squares.map(sq => sq.y));

    return (
        <div
            className="square-grid"
            style={{
                gridTemplateColumns: `repeat(${maxX + 1}, 67px)`,
                gridTemplateRows: `repeat(${maxY + 1}, 67px)`,
            }}
        >
            {squares.map((sq, idx) => (
                <Square key={idx} x={sq.x} y={sq.y} color={sq.color} />
            ))}
        </div>
    );
}

export default SquareGrid;