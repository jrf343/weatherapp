import _ from 'lodash';
import './style.css';

let searchQuery = 'London'

async function loadWeather(searchQuery) {
    try {
        let string = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchQuery + '&APPID=a1343208cbb466cd6182b3c592f6996c';
        const response = await fetch(string, {mode: 'cors'});
        const queryData = await response.json();

        document.getElementById('location-header').textContent = queryData.name;
        document.getElementById('feels-like').textContent = queryData.main.feels_like;
        document.getElementById('description').textContent = queryData.weather[0].description;
        document.getElementById('max-temp').textContent = queryData.main.temp_max;
        document.getElementById('min-temp').textContent = queryData.main.temp_min;
        document.getElementById('wind-speed').textContent = queryData.wind.speed;

        console.log(queryData);
    } catch (err) {
        console.log(err);
    }
}

window.onload = loadWeather(searchQuery);

const gifSearch = document.getElementById('weather-search');
gifSearch.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchQuery = gifSearch.value;
        loadWeather(searchQuery);
    }
})