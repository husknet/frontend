export async function makeApiRequest() {
    const response = await fetch('/api/request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // Any data you need to send to the backend
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
}
