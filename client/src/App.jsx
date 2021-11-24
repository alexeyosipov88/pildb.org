import logo from "./images/logo.jpg";
import "./styles/App.scss";

// import "./App.css";
import CountriesList from "./components/countries/CountriesList";
import { Outlet, Link } from "react-router-dom";
import TreatiesForCountry from "./components/countries/TreatiesForCountry";
function App() {
  return (
    <div>
      <header>
        <a href="/">
        <img src={logo}/>
        </a>
      
      </header>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <div>
          <Link to="countries">Countries</Link>
        </div>
        <div>
          <Link to="treaties">Treaties</Link>
        </div>
        <div>
          <Link to="topics">Topics</Link>
        </div>
        <div>
          <Link to="organizations">Organizations</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
