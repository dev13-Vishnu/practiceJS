import React, { useState, useEffect } from 'react'

const AsyncInsideUseEffect = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchUsers() {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users',{
                    signal: controller.signal,
                });
                if(!res.ok) throw new Error(res.statusText);
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                if(error.name !== 'AbortError') setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
        return () => controller.abort();
    },[]);

    if(loading) return <p>Loading...</p>;
    if(error) return <p style={{color:'red'}}>Error:{error}</p>
  return (
    <div>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  )
}

export default AsyncInsideUseEffect