import * as React from 'react';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import '../style/WandererDisplay.css';


export default function  WandererDisplay({ searchQuery }) {
    const [wanderers, setWanderers] = useState([]);
    const fullName = wanderers.first + ' ' + wanderers.last

    /* Retrieve all wanderers [{},{}]*/
    const fetchWanderers = () => {
        fetch("http://localhost:8080/wanderers")
        .then((res) => res.json())
        .then((result) => {
            setWanderers(result);
        });
    };

    // Initial fetch
    useEffect(() => {
        fetchWanderers();
    }, []);

    // Periodically fetch data (e.g., every 5 seconds)
    useEffect(() => {
        const interval = setInterval(fetchWanderers, 5000); // Adjust the interval as needed

        return () => {
        clearInterval(interval);
        };
    }, []);

    /* Filter the wanderers based on the search query */
    const filteredWanderers = searchQuery
    ? wanderers.filter((wanderer) => {
        const queryParts = searchQuery.split(" "); // Split query into parts

        if (queryParts.length === 2) {
            // When there are two parts (firstname and lastname)
            const [queryFirstName, queryLastName] = queryParts;
            const wandererFirstName = wanderer.firstName || "";
            const wandererLastName = wanderer.lastName || "";

            return (
            wandererFirstName.toLowerCase().includes(queryFirstName.toLowerCase()) &&
            wandererLastName.toLowerCase().includes(queryLastName.toLowerCase())
            );
        } else if (queryParts.length === 1) {
            // When there is only one part (match with first name)
            const [queryFirstName] = queryParts;
            const wandererFirstName = wanderer.firstName || "";
            return wandererFirstName.toLowerCase() === queryFirstName.toLowerCase();
        }
        return false; // Return false for any other queries
        })
    : wanderers;
    
    return (
        <div className='wanderer-display-container'>
            {filteredWanderers.length > 0 ? (
                filteredWanderers.map((wanderer) => (
                    <Paper elevation={6} style={{ width: "600px", padding: "15px", textAlign: "left" }} key={wanderer.id}>
                    Wanderer: {wanderer.id}<br />
                    Name: {wanderer.firstName + ' ' + wanderer.lastName}<br />
                    Origin: {wanderer.origin}
                    </Paper>
                ))
                ) : (
                <div className='wanderer-display-container'> 
                    <p>The wanderer you seek hasn't visited yet.</p>
                    {wanderers.map((wanderer) => (
                    <Paper elevation={6} style={{ width: "600px", padding: "15px", textAlign: "left" }} key={wanderer.id}>
                        Wanderer: {wanderer.id}<br />
                        Name: {fullName}<br />
                        Origin: {wanderer.origin}
                    </Paper>
                    ))}
                </div>
            )}
        </div>
    );
}