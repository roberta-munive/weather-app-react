import React from "react";
import "./FormattedDateTime.css";

export default function FormattedDateTime(props) {

  // reference: https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript

  // Need to multiply timestamp by 1000 so that the argument is in milliseconds, not seconds
  let dateTimeStr = new Date(props.timeStamp * 1000);

  // Convert time to the format 6:53 PM

  let timeOptions = { hour: "numeric", minute: "2-digit", hour12: true };
  let currentTime = new Intl.DateTimeFormat("en-US", timeOptions).format(dateTimeStr);

  // Convert date to the format October 24
  let dateOptions = { month: "long", day: "numeric" };
  let currentDate = new Intl.DateTimeFormat("en-US", dateOptions).format(dateTimeStr);

  // Day of week is returned as a number 0 through 6.  Convert to full length word
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayOfWeekNumerical = dateTimeStr.getDay();
  let dayOfWeekFullLengthWord = days[dayOfWeekNumerical];

  return (<div className="FormattedDateTime">
    <p className="current-date-time">{dayOfWeekFullLengthWord}, {currentDate}, {currentTime} </p>
  </div>);
}