async function makeApiRequest() {
    const response = await fetch("https://goprogram.onrender.com/api/request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer your-token"
        },
        body: JSON.stringify({
            // Include any data you need to send to the backend
        })
    });

    if (!response.ok) {
        console.error("Failed to make API request");
        return;
    }

    const data = await response.json();
    console.log("Response data:", data);
}
