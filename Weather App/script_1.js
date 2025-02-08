const cityInput = document.getElementById("cityinput");
const getweatherBtn = document.getElementById("getweatherBtn");
const errorMessageDiv = document.getElementById("errorMessage");

document.addEventListener("DOMContentLoaded", hidediv);


getweatherBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getWeather();
    }
});


function getWeather() {    
    const cityName = cityInput.value;
    clearError(); // clear old error messages
    clearWeatherData(); // clear old data 
    if (cityName === "") {
        showError("Please enter a city name!")       
        return;
    }
    fetchWeather(cityName);
}

const APIKEY = "57c595e56b62eb5abb831df3e29ca811";
const BaseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
async function fetchWeather(cityName) {
    try {
        const response = await fetch(`${BaseURL}${cityName}&appid=${APIKEY}&units=metric`);
        if (response.ok === "") {
            showError("Error fetching weather data.");
            clearWeatherData();            
            return;
        }

        const data = await response.json();
        if (data.cod === "404") {
            showError("City not found. Please enter a valid city name.");
            clearWeatherData();            
            return;
        }
        displayWeather(data);
        
    }
    catch (error) {
        console.error("Error fetching weather data:", error);
        showError("Unable to retrieve weather data. Please try again.");
        clearWeatherData();        
    }
}

function displayWeather(data) {
    hidediv();
    
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const rainChance = data.weather[0].main === "Rain" ? "Yes" : "No";


    document.getElementById("temperature").textContent = `${temperature}°C`;
    document.getElementById("humidity").textContent = `${humidity}%`;
    document.getElementById("windSpeed").textContent = `${windSpeed}Km/h`;
    document.getElementById("rainChance").textContent = rainChance;
}

function showError(message){
    errorMessageDiv.textContent = message;
    errorMessageDiv.style.color = "red";
    errorMessageDiv.style.display = "block";
}

function clearError(){
    errorMessageDiv.textContent ="";
    errorMessageDiv.style.display = "none";
    
}

function hidediv(){
    errorMessageDiv.style.display = "none"
}


function clearWeatherData(){
    document.getElementById("temperature").textContent = "";
    document.getElementById("humidity").textContent = "";
    document.getElementById("windSpeed").textContent = "";
    document.getElementById("rainChance").textContent = "";
}

