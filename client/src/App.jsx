import logo from "./logo.svg";
import "./App.css";
import CountriesList from "./components/countries/CountriesList";
import { Outlet, Link } from "react-router-dom";
import TreatiesForCountry from "./components/countries/TreatiesForCountry";
function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="countries">Countries</Link>
      </nav>
      <Outlet />

    </div>
  );
}

export default App;
