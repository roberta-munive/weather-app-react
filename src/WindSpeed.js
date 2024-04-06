import React, { useState } from "react";
import "./WindSpeed.css";

export default function WindSpeed(props) {
  let [units, setUnits] = useState("imperial");

  function showKilometersPerHour(event) {
    event.preventDefault();
    setUnits("metric");
  }

  function showMilesPerHour(event) {
    event.preventDefault();
    setUnits("imperial");
  }

  function convertMilesToKilometers(miles) {
    let kilometers = miles * 1.60934;
    return kilometers;
  }

  if (units === "imperial") {
    return (
      <div className="WindSpeed">
        <p className="current-wind-speed">
          Wind: {Math.round(props.currentWindSpeed)} mph |{" "}
          <a
            href="/"
            className="text-decoration-none fw-light opacity-75"
            onClick={showKilometersPerHour}>
            km/h
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="WindSpeed">
        <p className="current-wind-speed">
          Wind: {Math.round(convertMilesToKilometers(props.currentWindSpeed))}{" "}
          km/h |{" "}
          <a
            href="/"
            className="text-decoration-none fw-light opacity-75"
            onClick={showMilesPerHour}>
            mph
          </a>
        </p>
      </div>
    );
  }
}
