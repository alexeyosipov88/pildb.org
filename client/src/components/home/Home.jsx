import HomeTopicsList from "./HomeTopicsList";
import unidroitLogo from "../../images/unidroit.png"


const Home = () => {

  return (
    <div className="home flex flex-fw-w">
      <HomeTopicsList />
      <div className="organizations">
      <img src={unidroitLogo} alt=""/>
      </div>
    </div>
  )

}

export default Home;