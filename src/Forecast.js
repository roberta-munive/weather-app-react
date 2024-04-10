import React, { useState } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";
import ForecastSingleDay from "./ForecastSingleDay";
import "./Forecast.css";

export default function Forecast(props) {
  let [hasLoaded, setHasLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setHasLoaded(true);
  }

  if (hasLoaded) {
    return (
      <div className="Forecast">
        <div className="multi-day-forecast">
          <ForecastSingleDay forecastData={forecastData} />
        </div>
        <hr />
      </div>
    );
  } else {
    const apiKey = "cf14b4c0f0c0d7a973ee3b4e430t2bo5";
    let units = "imperial";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
}
