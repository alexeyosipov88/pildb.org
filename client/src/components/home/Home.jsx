import HomeTopicsList from "./HomeTopicsList";
import unidroitLogo from "../../images/logos/unidroit-logo.png";
import hagueLogo from "../../images/logos/hague-logo.png";
import icaoLogo from "../../images/logos/icao-logo.png";
import unLogo from "../../images/logos/UN-logo.png";
import wipoLogo from "../../images/logos/wipo-logo.png";
import { Link } from "react-router-dom";
import Search from "../search/Search";

const Home = () => {
  return (
    <div>
      <Search></Search>
      <div className="home flex container">
        <HomeTopicsList />
        <div className="organizations">
          <div>
            <div id="hague-logo">
              <Link
                className="link"
                to={`/organizations/hague`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={hagueLogo} alt="hague convention logo" />
              </Link>
            </div>
            <div className="organization-title">
              <Link
                className="link"
                to={`/organizations/hague`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Hague Convention</p>
              </Link>
            </div>
          </div>
          <div className="big-logos">
            <div id="un-logo" className="logo-image">
              <Link
                className="link"
                to={`/organizations/un`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={unLogo} alt="" />
              </Link>
            </div>
            <div className="organization-title">
              <Link
                className="link"
                to={`/organizations/un`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>United Nations</p>
              </Link>
            </div>
          </div>
          <div>
            <div id="unidroit-logo">
              <Link
                className="link"
                to={`/organizations/unidroit`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={unidroitLogo} alt="" />
              </Link>
            </div>
            <div className="organization-title">
              <Link
                className="link"
                to={`/organizations/unidroit`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Unidroit</p>
              </Link>
            </div>
          </div>
          <div className="big-logos">
            <div id="icao-logo">
              <Link
                className="link"
                to={`/organizations/icao`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icaoLogo} alt="" />
              </Link>
            </div>
            <div className="organization-title">
              <Link
                className="link"
                to={`/organizations/icao`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>ICAO</p>
              </Link>
            </div>
          </div>
          <div className="big-logos">
            <div id="wipo-logo">
              <Link
                className="link"
                to={`/organizations/wipo`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={wipoLogo} alt="" />
              </Link>
            </div>
            <div className="organization-title">
              <Link
                className="link"
                to={`/organizations/wipo`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>WIPO</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
