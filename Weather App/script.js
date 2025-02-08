const API_KEY = "57c595e56b62eb5abb831df3e29ca811"; // Replace with your OpenWeatherMap API key
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=`;

// Get references to the input and button
const cityInput = document.getElementById("cityinput");
const getWeatherBtn = document.getElementById("getweatherBtn");

// Event listener for the search button
getWeatherBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keypress",(e)=>{
    if(e.key === 'Enter'){
        getWeather();
    }
})

// Fetch weather data when the button is clicked
async function getWeather() {
    const cityName = cityInput.value;

    if (!cityName) {
        alert("Please enter a city name!");
    }
    else {
        const response = await fetch(`${weatherURL}${cityName}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        updateWeatherUI(data);
    }


}

// Update the UI with fetched weather data
function updateWeatherUI(data) {
    // Get necessary weather data
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const rainChance = data.weather[0].main === "Rain" ? "Yes" : "No";

    // Update the text content in the HTML
    document.getElementById("temperature").textContent = `${temperature}°C`;
    document.getElementById("humidity").textContent = `${humidity}%`;
    document.getElementById("windSpeed").textContent = `${windSpeed} km/h`;
    document.getElementById("rainChance").textContent = rainChance;
}
