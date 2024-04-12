import React, { useState, useEffect } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";
import ForecastSingleDay from "./ForecastSingleDay";
import "./Forecast.css";

export default function Forecast(props) {
  let [hasLoaded, setHasLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  let [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setHasLoaded(true);
    setCity(response.data.city);
  }

  useEffect(() => {
    setHasLoaded(false);
  }, [props.city]);

  let numForecastDays = 5;

  if (hasLoaded) {
    return (
      <div className="Forecast">
        <div className="multi-day-forecast">
          {forecastData.map(function (dailyForecast, index) {
            if (index < numForecastDays) {
              return (
                <div key={index}>
                  <ForecastSingleDay forecastData={dailyForecast} city={city} />
                </div>
              );
            } else {
              return null;
            }
          })}
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
