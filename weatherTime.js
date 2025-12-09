<script>
// Fetch Weather Data
function fetchWeather() {
    const weatherStatusElement = document.getElementById('weatherStatus');
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=YOUR_API_KEY&units=metric')
        .then(response => {
            if (!response.ok) {
                throw new Error("Weather data not found");
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherStatusElement.textContent = `${description} - ${temperature}°C`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherStatusElement.textContent = 'Failed to load weather data';
        });
}

// Update Time
function updateTime() {
    const currentTimeElement = document.getElementById('currentTime');
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update weather and time every minute
setInterval(() => {
    fetchWeather();
    updateTime();
}, 60000); 

// Initial fetch
fetchWeather();
updateTime();
</script>
