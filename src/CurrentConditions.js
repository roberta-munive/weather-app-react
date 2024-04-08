import React from "react";
import "./CurrentConditions.css";
import FormattedDateTime from "./FormattedDateTime";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";
import WindSpeed from "./WindSpeed";

export default function CurrentConditions(props) {
  return (
    <div className="CurrentConditions">
      <div className="current-conditions">
        <div className="current-conditions-left-side">
          <h1 className="current-city">{props.weatherData.city}</h1>
          <FormattedDateTime timeStamp={props.weatherData.timeStamp} />
          <WeatherIcon
            iconDescription={props.weatherData.iconDescription}
            size={75}
          />
          <p className="current-conditions-description">
            {props.weatherData.description}
          </p>
          <WindSpeed currentWindSpeed={props.weatherData.windSpeed} />
        </div>
        <div className="current-conditions-right-side">
          <CurrentTemperature
            fahrenheitCurrentTemp={props.weatherData.temperature}
            fahrenheitFeelsLikeTemp={props.weatherData.feelsLike}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}
