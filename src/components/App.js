import React, { useState } from 'react';
import { makeApiRequest } from '../utils/api';

function App() {
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const data = await makeApiRequest();
            setResponseData(data);
        } catch (err) {
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>My Frontend App</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Fetch Data'}
                </button>
            </form>
            {error && <p className="error">{error}</p>}
            {responseData && (
                <div className="response">
                    <h2>Response Data:</h2>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
