import Search from "./Search";
import CurrentConditions from "./CurrentConditions";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";

export default function App() {

  return (
    <div className="App">
      <div className="app-container container">
        <div className="card weather-watch-card-body">
          {/* search section */}
          <Search />

          {/* current conditions section */}

          <CurrentConditions />

          {/* forecast section */}

          <Forecast />

          {/* footer section */}
          <Footer />
        </div>
      </div>
    </div>
  );
}


