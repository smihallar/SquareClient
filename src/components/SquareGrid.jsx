// React component to display a grid of squares with specified colors and positions
import Square from "./Square";

function SquareGrid({ squares }) {
    const maxX = Math.max(0, ...squares.map(sq => sq.x)); // Get the maximum x coordinate from the squares array
    const maxY = Math.max(0, ...squares.map(sq => sq.y)); // Get the maximum y coordinate from the squares array

    return (
        <div
            className="square-grid"
            style={{
                gridTemplateColumns: `repeat(${maxX + 1}, 67px)`, // Set the grid template columns based on the maximum x coordinate
                gridTemplateRows: `repeat(${maxY + 1}, 67px)`, // Set the grid template rows based on the maximum y coordinate
            }}
        >
            {/* Map through the squares array and render a Square component for each square */}
            {squares.map((sq, idx) => (
                <Square key={idx} x={sq.x} y={sq.y} color={sq.color} />
            ))}
        </div>
    );
}

export default SquareGrid;