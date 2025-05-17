import React, { useState, useCallback, useEffect } from "react";
import './App.css'
import SquareGrid from "./components/SquareGrid";

// API URL for fetching squares
const API_URL = "https://localhost:7142/api/Square";

function App() {
    const [squares, setSquares] = useState([]); // The squares state holds the array of square objects
    const [error, setError] = useState(null); // The error state holds any error messages

    const fetchSquares = useCallback(async () => {
        try {
            setError(null);
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error(`Error fetching squares: ${res.status}`);
            const data = await res.json();
            setSquares(data || []);
        } catch {
            setError("Failed to fetch squares.");
        }
    }, []);

    useEffect(() => {
        fetchSquares();
    }, [fetchSquares]);

    return (
        <div>
            <SquareGrid squares={squares} />
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default App
