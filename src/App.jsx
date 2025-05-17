import React, { useState, useCallback, useEffect } from "react";
import './App.css'
import SquareGrid from "./components/SquareGrid";
import ControlPanel from "./components/ControlPanel";

// API URL for fetching squares
const API_URL = "https://localhost:7142/api/Square";

function App() {
    const [squares, setSquares] = useState([]); // The squares state holds the array of square objects
    const [error, setError] = useState(null); // The error state holds any error messages

    // Function to fetch squares from the API
    const fetchSquares = useCallback(async () => {
        try {
            setError(null);
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error(`Error fetching squares: ${res.status}`);
            const data = await res.json();
            setSquares(data || []);
        } catch(err){
            setError(err.message);
        }
    }, []);

    // Function to add a new square by making a POST request to the API
    const addSquare = async () => {
        try {
            const res = await fetch(API_URL, { method: "POST" });
            if (!res.ok) throw new Error(`Error adding square: ${res.status}`);
            fetchSquares();
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchSquares();
    }, [fetchSquares]);

    return (
        <div>
            <ControlPanel
                onAdd={addSquare}
            />
            <SquareGrid squares={squares} />
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default App
