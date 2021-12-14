import HomeTopicsList from "./HomeTopicsList";
import unidroitLogo from "../../images/logos/unidroit-logo.png";
import hagueLogo from "../../images/logos/hague-logo.png";
import icaoLogo from "../../images/logos/icao-logo.png";
import unLogo from "../../images/logos/UN-logo.png";
import wipoLogo from "../../images/logos/wipo-logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home flex">
      <HomeTopicsList />
      <div className="organizations">
        <div>
          <div>
            <Link to={`/organizations/hague`}>
              <img src={hagueLogo} alt="hague convention logo" />
            </Link>
          </div>
          <div class="organization-title">
            <Link to={`/organizations/hague`}>Hague Convention</Link>
          </div>
        </div>
        <div className="big-logos">
          <div className="logo-image">
            <Link to={`/organizations/un`}>
              <img src={unLogo} alt="" />
            </Link>
          </div>
          <div class="organization-title">
            <Link to={`/organizations/un`}>United Nations</Link>
          </div>
        </div>
        <div>
          <div className="logo-image">
            <Link to={`/organizations/unidroit`}>
              <img src={unidroitLogo} alt="" />
            </Link>
          </div>
          <div class="organization-title">
            <Link to={`/organizations/unidroit`}>Unidroit</Link>
          </div>
        </div>
        <div className="big-logos">
          <div className="logo-image">
            <Link to={`/organizations/icao`}>
              <img src={icaoLogo} alt="" />
            </Link>
          </div>
          <div class="organization-title">
            <Link to={`/organizations/icao`}>ICAO</Link>
          </div>
        </div>
        <div className="big-logos">
          <div className="logo-image">
            <Link to={`/organizations/wipo`}>
              <img src={wipoLogo} alt="" />
            </Link>
          </div>
          <div class="organization-title">
            <Link to={`/organizations/wipo`}>WIPO</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
