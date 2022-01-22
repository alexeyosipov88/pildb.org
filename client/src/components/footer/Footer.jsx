import { Link } from "react-router-dom";
import IconsInfo from "./IconsInfo";

const Footer = () => {
  return (
    <footer className="flex flex-jc-c footer container">
      <div className="footer-info flex">
        <div className="flex flex-jc-c footer-links">
          <div>
            <Link className="link" to="about">
              About
            </Link>
            <Link className="link" to="contact  ">
              Contact 
            </Link>
            <Link className="link" to="countries">
              Countries
            </Link>
          </div>
          <div>
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
        </div>
        <div className="legal-footer flex">
          <IconsInfo />
          <div>
          <p>© 2022 Alexey Osipov</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
