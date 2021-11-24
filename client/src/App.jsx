import logo from "./images/logo.jpg";
import "./styles/App.scss";

// import "./App.css";
import CountriesList from "./components/countries/CountriesList";
import { Outlet, Link } from "react-router-dom";
import TreatiesForCountry from "./components/countries/TreatiesForCountry";
function App() {
  return (
    <div>
      <header className="header">
        <nav
         className="flex flex-jc-sb"
        >
          <a href="/" className="header__logo">
            <img style={{ width: "50px" }} src={logo} alt="logo" />
          </a>
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
          <a href="#" className="header__menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
