import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  return (
    <div className="CurrentTemperature">
      <span className="current-temperature">
        {Math.round(props.fahrenheitCurrentTemp)}
      </span>
      <span className="degree-unit"> °F</span>
      <p className="current-feels-like-temperature">
        Feels like: {Math.round(props.fahrenheitFeelsLikeTemp)}°F
      </p>
    </div>
  );
}
