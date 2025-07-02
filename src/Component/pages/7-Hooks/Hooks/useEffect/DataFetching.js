import React, { useEffect, useState } from "react";

function DataFetching() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading Dude...</h1>
            ) : (
                <ul>
                    {data.map((user) => (
                        <li key={user.id}>
                            <strong>{user.name}</strong>: {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DataFetching;
