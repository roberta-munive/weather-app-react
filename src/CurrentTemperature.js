import React, { useState } from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  let [unit, setUnit] = useState("fahrenheit");

  function showCelsiusTemp(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheitTemp(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertFahrenheitToCelsius(fahrenheitTemp) {
    let celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;
    return celsiusTemp;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="CurrentTemperature">
        <span className="current-temperature">
          {Math.round(props.fahrenheitCurrentTemp)}
        </span>
        <span className="degree-unit">
          {" "}
          °F |{" "}
          <a
            href="/"
            className="text-decoration-none"
            onClick={showCelsiusTemp}>
            °C
          </a>
        </span>
        <p className="current-feels-like-temperature">
          Feels like: {Math.round(props.fahrenheitFeelsLikeTemp)}°
        </p>
      </div>
    );
  } else {
    return (
      <div className="CurrentTemperature">
        <span className="current-temperature">
          {Math.round(convertFahrenheitToCelsius(props.fahrenheitCurrentTemp))}
        </span>
        <span className="degree-unit">
          {" "}
          °C |{" "}
          <a
            href="/"
            className="text-decoration-none"
            onClick={showFahrenheitTemp}>
            °F
          </a>{" "}
        </span>
        <p className="current-feels-like-temperature">
          Feels like:{" "}
          {Math.round(
            convertFahrenheitToCelsius(props.fahrenheitFeelsLikeTemp)
          )}
          °
        </p>
      </div>
    );
  }
}
