import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/logo.jpg";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [navClass, setNavClass] = useState(true);
  const [ovelay, setOverlay] = useState("");
  const [overlayMenuClass, setOverlayMenuClass] = useState(
    "header__menu container has-fade"
  );
  let navMenuClass = navClass ? "header" : "header open";

  const clickOnHamburger = () => {
    if (navClass) {
      setNavClass(false);
      setOverlay("overlay fade-in");
      setOverlayMenuClass("header__menu container fade-in");
    } else {
      setNavClass(true);
      setOverlay("overlay fade-out");
      setOverlayMenuClass("header__menu container fade-out");
    }
    console.log("clicked on nav menu bar");
  };
  return (
    <header className={navMenuClass}>
      <div className={ovelay}></div>
      <nav className="container flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          <img style={{ width: "50px" }} src={logo} alt="logo" />
        </a>
        <div className="header__links hide-for-mobile flex flex-jc-sb flex-ai-c">
          <Link className="link" to="#">
            About
          </Link>
          <Link className="link" to="#">
            Contact
          </Link>
          <Link className="link" to="countries">
            Countries
          </Link>
          <Link className="link" to="treaties">
            Treaties
          </Link>
          <Link className="link" to="topics">
            Topics
          </Link>
          <Link className="link" to="organizations">
            Organizations
          </Link>
        </div>
        <a
          href="#"
          className="header__toggle container hide-for-desktop"
          onClick={() => clickOnHamburger()}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </nav>
      <MobileMenu
        clickOnHamburger={clickOnHamburger}
        overlayMenuClass={overlayMenuClass}
      />
    </header>
  );
};

export default Navbar;