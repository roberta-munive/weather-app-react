import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastSingleDay.css";

export default function ForecastSingleDay(props) {
  // console.log(props.forecastData);

  function maxTemperatureRounded() {
    let maxTemp = Math.round(props.forecastData.temperature.maximum);
    return maxTemp;
  }

  function minTemperatureRounded() {
    let minTemp = Math.round(props.forecastData.temperature.minimum);
    return minTemp;
  }

  function dayOfWeekLengthThree() {
    // Need to multiply timestamp by 1000 so that the argument is in milliseconds, not seconds
    let dateTimeStr = new Date(props.forecastData.time * 1000);

    let dayOfWeekNumerical = dateTimeStr.getDay();

    // Day of week is returned as a number 0 through 6.  Convert to word of length 3
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let dayOfWeekWordLength3 = days[dayOfWeekNumerical];

    return dayOfWeekWordLength3;
  }

  return (
    <div className="ForecastSingleDay">
      <div className="forecast-card single-day-forecast">
        <div className="forecast-day-of-week">{dayOfWeekLengthThree()}</div>
        <hr className="forecast-hr" />
        <WeatherIcon
          className="forecast-conditions-icon"
          iconDescription={props.forecastData.condition.icon}
          size={50}
        />
        <div className="forecast-temperatures mt-4 mb-3 ">
          <div className="forecast-high-temperature">
            {maxTemperatureRounded()}°F
          </div>
          <div className="forecast-low-temperature">
            {minTemperatureRounded()}°F
          </div>
        </div>
      </div>
    </div>
  );
}
