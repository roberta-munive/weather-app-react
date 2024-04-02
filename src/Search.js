import React from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-bar input-group">
        <input
          type="search"
          name="search-bar-input"
          className="search-bar-input"
          placeholder="Enter a city"
          required
          
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <hr />
    </div>
  );
}
