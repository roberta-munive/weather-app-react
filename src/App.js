import Search from "./Search";
import Footer from "./Footer";
import "./App.css";

export default function App() {

  return (
    <div className="App">
      <div className="app-container container">
        <div className="card weather-watch-card-body">
          {/* search section */}
          <Search defaultCity="Paris" />
          {/* footer section */}
          <Footer />
        </div>
      </div>
    </div>
  );
}


