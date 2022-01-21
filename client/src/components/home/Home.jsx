import HomeTopicsList from "./HomeTopicsList";
import unidroitLogo from "../../images/logos/unidroit-logo.png";
import hagueLogo from "../../images/logos/hague-logo.png";
import icaoLogo from "../../images/logos/icao-logo.png";
import unLogo from "../../images/logos/UN-logo.png";
import wipoLogo from "../../images/logos/wipo-logo.png";
import { Link } from "react-router-dom";


const Home = () => {

  return (
    <div>
      <div className="organizations-topics home flex container">
        <HomeTopicsList />
        <div className="organizations">
          <div>
            <div id="hague-logo">
              <Link
                className="link"
                to={`/organizations/1`}
              >
                <img src={hagueLogo} alt="hague convention logo" />
              </Link>
            </div>
            <div className="organization-title">
              <Link
                className="link"
                to={`/organizations/1`}
              >
                <p>Hague Conference</p>
              </Link>
            </div>
          </div>
          <div className="big-logos">
            <div id="un-logo" className="logo-image">
              <Link
                className="link"
                to={`/organizations/2`}
              >
                <img src={unLogo} alt="" />
              </Link>
            </div>
            <div className="organization-title">
              <Link
                className="link"
                to={`/organizations/2`}
              >
                <p>United Nations</p>
              </Link>
            </div>
          </div>
          <div>
            <div id="unidroit-logo">
              <Link
                className="link"
                to={`/organizations/3`}
              >
                <img src={unidroitLogo} alt="" />
              </Link>
            </div>
            <div className="organization-title">
              <Link
                className="link"
                to={`/organizations/3`}
              >
                <p>Unidroit</p>
              </Link>
            </div>
          </div>
          <div className="big-logos">
            <div id="icao-logo">
              <Link
                className="link"
                to={`/organizations/4`}
              >
                <img src={icaoLogo} alt="" />
              </Link>
            </div>
            <div className="organization-title">
              <Link
                className="link"
                to={`/organizations/4`}
              >
                <p>ICAO</p>
              </Link>
            </div>
          </div>
          <div className="big-logos">
            <div id="wipo-logo">
              <Link
                className="link"
                to={`/organizations/5`}
              >
                <img src={wipoLogo} alt="" />
              </Link>
            </div>
            <div className="organization-title">
              <Link
                className="link"
                to={`/organizations/5`}
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
