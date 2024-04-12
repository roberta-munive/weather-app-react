import React from "react";
import "./WindSpeed.css";

export default function WindSpeed(props) {
  return (
    <div className="WindSpeed">
      <p className="current-wind-speed">
        Wind: {Math.round(props.currentWindSpeed)} mph{" "}
      </p>
    </div>
  );
}
