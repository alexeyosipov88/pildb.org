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
          <Link to={`/organizations/hague`}>
            <img src={hagueLogo} alt="" />
          </Link>
        </div>
        <div className="big-logos">
          <Link to={`/organizations/un`}>
            <img src={unLogo} alt="" />
          </Link>
        </div>
        <div>
          <Link to={`/organizations/unidroit`}>
            <img src={unidroitLogo} alt="" />
          </Link>
        </div>
        <div className="big-logos">
          <Link to={`/organizations/icao`}>
            <img src={icaoLogo} alt="" />
          </Link>
        </div>
        <div className="big-logos">
          <Link to={`/organizations/wipo`}>
            <img src={wipoLogo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
