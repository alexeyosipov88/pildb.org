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
        <nav className="flex flex-jc-sb flex-ai-c">
          <a href="/" className="header__logo">
            <img style={{ width: "50px" }} src={logo} alt="logo" />
          </a>
          <div className="header__links hide-for-mobile flex flex-jc-sb flex-ai-c">
            <Link className="link" to="#">About</Link>
            <Link className="link" to="#">Contact</Link>
            <Link className="link" to="countries">Countries</Link>
            <Link className="link" to="treaties">Treaties</Link>
            <Link className="link" to="topics">Topics</Link>
            <Link className="link" to="organizations">Organizations</Link>
          </div>
          <a href="#" className="header__menu hide-for-desktop">
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
