import logo from "./images/logo.jpg";
import "./styles/App.scss";
import { useState } from "react";

// import "./App.css";
import CountriesList from "./components/countries/CountriesList";
import { Outlet, Link } from "react-router-dom";
import TreatiesForCountry from "./components/countries/TreatiesForCountry";
function App() {
  const [navClass, setNavClass] = useState(true);
  let navMenuClass = navClass ? 'header' : 'header open';
  let navOverlayMenu = navClass ? 'overlay fade-out' : 'overlay fade-in'
  const clickOnHamburger = () => {
    if(navClass) {
      setNavClass(false);
    } else {
      setNavClass(true)
    }
    console.log("clicked on nav menu bar")
  }

  return (
    <div>
      <header className={navMenuClass}>
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
          <div className={navOverlayMenu}></div>
          <a href="#" className="header__menu hide-for-desktop" onClick={() => clickOnHamburger()}>
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
