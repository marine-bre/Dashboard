import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cloudy from './WeatherIcons/Cloudy.js';
import Clear from './WeatherIcons/Clear.js';
import Rain from './WeatherIcons/Rain.js';

function Weather() {

    //key for the weather API
    const KEY = '1f03c9691e42a639806054a045f67bd6';

    const [weather, setWeather] = useState({
        'main': '',
        'temp': '',
        'humidity': '',
        'city': ''
    })
    const [coordinates, setCoordinates] = useState({
        'lat': '',
        'lon': ''
    })

    //API request to obtain user's IP address and coordinates
    const getCoordinates = () => {
        axios('https://extreme-ip-lookup.com/json/')
            .then(response => {
                setCoordinates({
                    'lat': response.data.lat,
                    'lon': response.data.lon
                })
            })
            .catch(err => console.log(err))
    }

    //call getCoordinates when the page is rendered for the first time
    useEffect(() => {
        getCoordinates()
    }, [])

    //API request to obtain weather conditions at the user's coordinates
    const getWeather = () => {
        let requestOptions = {
            method: 'GET'
        };
        axios(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${KEY}&units=metric`, requestOptions)
            .then(result => setWeather({
                'main': result.data.weather[0].main,
                'temp': result.data.main.temp,
                'humidity': result.data.main.humidity,
                'city': result.data.name
            }))
            .catch(error => console.log(error.response.data.message));
            console.log(weather)
    }

    //calling getWeather when coordinates state has been updated
    useEffect(() => {
        getWeather()
    }, [coordinates])



    return (
        <div className='component flex-container' id='weather'>
            <p id='weather-main'>{weather.main}</p>
            {weather.main === 'Clear' && <Clear />}
            {weather.main === 'Clouds' && <Cloudy />}
            {weather.main === 'Rain' && <Rain />}
            <h1>{weather.city.toUpperCase()}</h1>
            <div className='divider-vertical'></div>
            <div className='flex-down'>
                <p className='titles weather--num'> T: {Math.round(weather.temp)} °C</p>
                <p className='titles weather--num'>H: {Math.round(weather.humidity)} %</p></div>
        </div>
    );
}

export default Weather;