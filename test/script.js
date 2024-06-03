// Import RippleNotify if it's not already imported
import { ripple } from "/ripple-notify";

// Function to handle click event on the button
document.getElementById('fetchButton').addEventListener('click', async () => {
    try {
        // Fetch data from an API
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse the response JSON
        const data = await response.json();

        // Show a success Ripple notification with the fetched data
        ripple.success(`Data fetched successfully: ${JSON.stringify(data)}`);
    } catch (error) {
        // Show an error Ripple notification if there's an error
        ripple.error(`Error fetching data: ${error.message}`);
    }
});
