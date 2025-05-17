import React, { useState, useCallback, useEffect } from "react";
import './App.css'
import SquareGrid from "./components/SquareGrid";
import ControlPanel from "./components/ControlPanel";
import ErrorMessage from "./components/ErrorMessage";
import Header from "./components/Header";

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

    // Function to delete square by making a DELETE request to the API
    const deleteSquare = async () => {
        try {
            const res = await fetch(API_URL, { method: "DELETE" });
            if (!res.ok) throw new Error(`Error deleting square: ${res.status}`);
            fetchSquares();
        } catch(err) {
            setError(err.message);
        }
    };

    // Function to clear all squares by making a PUT request to the API
    const clearAllSquares = async () => {
        try {
            const res = await fetch(API_URL, { method: "PUT" });
            if (!res.ok) throw new Error(`Error deleting square: ${res.status}`);
            fetchSquares();
        } catch(err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchSquares();
    }, [fetchSquares]);

    return (
        <div className="page-content">
            <Header />
            <ControlPanel
                onAdd={addSquare}
                onDelete={deleteSquare}
                onClear={clearAllSquares}
            />
            <ErrorMessage message={error} />
            <SquareGrid squares={squares} />
        </div>
    )
}

export default App
