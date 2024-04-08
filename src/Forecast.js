import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  const apiKey = "cf14b4c0f0c0d7a973ee3b4e430t2bo5";
  let units = "imperial";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data.city);
  }

  return (
    <div className="Forecast">
      <div className="multi-day-forecast">
        <div className="forecast-card single-day-forecast">
          <div className="forecast-day-of-week">Tues</div>
          <hr className="forecast-hr" />
          <WeatherIcon
            className="forecast-conditions-icon"
            iconDescription="clear-sky-day"
            size={50}
          />
          <div className="forecast-temperatures mt-4 mb-3 ">
            <div className="forecast-high-temperature">54°F</div>
            <div className="forecast-low-temperature">47°F</div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
