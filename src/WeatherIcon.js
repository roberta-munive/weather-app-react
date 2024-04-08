import React from "react";
import "./WeatherIcon.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const iconCodeMap = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };

  return (
    <div className="WeatherIcon">
      <ReactAnimatedWeather
        className="current-conditions-icon"
        icon={iconCodeMap[props.iconDescription]}
        color="#1a355b"
        size={props.size}
        animate={true}
      />
    </div>
  );
}
