import { Link } from "react-router-dom";
import IconsInfo from "./IconsInfo";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-info flex">
        <div className="flex flex-jc-c footer-links">
          <div>
            <Link className="link" to="#"  target="_blank" rel="noopener noreferrer">
              About
            </Link>
            <Link className="link" to="#">
              Contact
            </Link>
            <Link className="link" to="countries"  target="_blank" rel="noopener noreferrer">
              Countries
            </Link>
          </div>
          <div>
            <Link className="link" to="treaties"  target="_blank" rel="noopener noreferrer">
              Treaties
            </Link>
            <Link className="link" to="topics">
              Topics
            </Link>
            <Link className="link" to="organizations"  target="_blank" rel="noopener noreferrer">
              Organizations
            </Link>
          </div>
        </div>
        <div className="legal-footer flex">
          <IconsInfo />
          <div>
          <p>© 2021 Alexey Osipov</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
