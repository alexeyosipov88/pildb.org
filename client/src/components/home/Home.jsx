import HomeTopicsList from "./HomeTopicsList";
import unidroitLogo from "../../images/logos/unidroit-logo.png";
import hagueLogo from "../../images/logos/hague-logo.png";
import icaoLogo from "../../images/logos/icao-logo.png";
import unLogo from "../../images/logos/UN-logo.png";
import wipoLogo from "../../images/logos/wipo-logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home flex container">
      <HomeTopicsList />
      <div className="organizations">
        <div>
          <div id="hague-logo">
            <Link className="link" to={`/organizations/hague`}>
              <img  src={hagueLogo} alt="hague convention logo" />
            </Link>
          </div>
          <div class="organization-title">
            <Link className="link" to={`/organizations/hague`}>
              <p>Hague Convention</p>
            </Link>
          </div>
        </div>
        <div className="big-logos">
          <div id="un-logo" className="logo-image">
            <Link className="link" to={`/organizations/un`}>
              <img src={unLogo} alt="" />
            </Link>
          </div>
          <div class="organization-title">
            <Link className="link" to={`/organizations/un`}>
              <p>United Nations</p>
            </Link>
          </div>
        </div>
        <div>
          <div id="unidroit-logo">
            <Link className="link" to={`/organizations/unidroit`}>
              <img src={unidroitLogo} alt="" />
            </Link>
          </div>
          <div class="organization-title">
            <Link className="link" to={`/organizations/unidroit`}>
              <p>Unidroit</p>
            </Link>
          </div>
        </div>
        <div className="big-logos">
          <div id="icao-logo">
            <Link className="link" to={`/organizations/icao`}>
              <img src={icaoLogo} alt="" />
            </Link>
          </div>
          <div class="organization-title">
            <Link className="link" to={`/organizations/icao`}>
              <p>ICAO</p>
            </Link>
          </div>
        </div>
        <div className="big-logos">
          <div id="wipo-logo">
            <Link className="link" to={`/organizations/wipo`}>
              <img src={wipoLogo} alt="" />
            </Link>
          </div>
          <div class="organization-title">
            <Link className="link" to={`/organizations/wipo`}>
              <p>WIPO</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
