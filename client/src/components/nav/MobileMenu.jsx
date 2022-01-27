import { Link } from "react-router-dom";

const MobileMenu = (props) => {
  return (
    <div className={props.overlayMenuClass} onClick={props.clickOnHamburger}>
      <Link className="link" to="about">
        About
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
      <Link className="link" to="contact">
        Contact
      </Link>
    </div>
  );
};

export default MobileMenu;
