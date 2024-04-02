import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import CurrentConditions from "./CurrentConditions";
import Forecast from "./Forecast";

export default function Search(props) {

  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ temperature: null });

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getWeatherData();

  }

  function getWeatherData() {
    const apiKey = "cf14b4c0f0c0d7a973ee3b4e430t2bo5";
    const units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleResponse(response) {
    setWeatherData({
      city: response.data.city,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      windSpeed: response.data.wind.speed,
      description: response.data.condition.description,
      imgUrl: response.data.condition.icon_url
    });

  }



  if (weatherData.temperature) {
    return (
      <div className="Search">
        <form className="search-bar input-group" onSubmit={handleSubmit}>
          <input
            type="search"
            name="search-bar-input"
            className="search-bar-input"
            placeholder="Enter a city"
            required
            onChange={updateCity}

          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
        <hr />
        {/* current conditions section */}

        <CurrentConditions weatherData={weatherData} />

        {/* forecast section */}

        <Forecast />
      </div>
    );
  } else {
    getWeatherData();
    return "Loading....";
  }

}
