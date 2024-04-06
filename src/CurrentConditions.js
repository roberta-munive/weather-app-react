import React from "react";
import "./CurrentConditions.css";
import FormattedDateTime from "./FormattedDateTime";
import WeatherIcon from "./WeatherIcon";

export default function CurrentConditions(props) {
  return (
    <div className="CurrentConditions">
      <div className="current-conditions">
        <div className="current-conditions-left-side">
          <h1 className="current-city">{props.weatherData.city}</h1>
          <FormattedDateTime timeStamp={props.weatherData.timeStamp} />
          <WeatherIcon iconDescription={props.weatherData.iconDescription} />
          <p className="current-conditions-description">
            {props.weatherData.description}
          </p>
          <p className="current-wind-speed">
            Wind: {Math.round(props.weatherData.windSpeed)} mph
          </p>
        </div>
        <div className="current-conditions-right-side">
          <span className="current-temperature">
            {Math.round(props.weatherData.temperature)}
          </span>
          <span className="degree-unit">°F</span>
          <p className="current-feels-like-temperature">
            Feels like: {Math.round(props.weatherData.feelsLike)}°
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
