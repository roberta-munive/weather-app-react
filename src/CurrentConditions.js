import React from "react";
import "./CurrentConditions.css";

export default function CurrentConditions() {
  let weatherData = {
    city: "Paris",
    day: "Tuesday",
    date: "October 24",
    time: "6:53pm",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    description: "Partly cloudy",
    windSpeed: 13,
    temperature: 19,
    feelsLike: 85,
  };

  return (
    <div className="CurrentConditions">
      <div className="current-conditions">
        <div className="current-conditions-left-side">
          <h1 className="current-city">{weatherData.city}</h1>
          <p className="current-date-time">
            {weatherData.day}, {weatherData.date}, {weatherData.time}
          </p>
          <img
            className="current-conditions-icon"
            src={weatherData.imgUrl}
            alt={weatherData.description}
          />
          <p className="current-conditions-description">
            {weatherData.description}
          </p>
          <p className="current-wind-speed">
            Wind: {weatherData.windSpeed} mph
          </p>
        </div>
        <div className="current-conditions-right-side">
          <span className="current-temperature">{weatherData.temperature}</span>
          <span className="degree-unit">°F</span>
          <p className="current-feels-like-temperature">
            Feels like: {weatherData.feelsLike}°
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}