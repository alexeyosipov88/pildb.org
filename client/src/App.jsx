import "./styles/App.scss";
import Navbar from "./components/nav/Navbar";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Footer from "./components/footer/Footer";
import Search from "./components/search/Search";
function App() {
  return (
    <Fragment>
      <Navbar/>
      <main className='main-section'>
        <Search></Search>
        <section className="main container flex flex-jc-sa flex-ai-c">
          <Outlet />
        </section>
      </main>
      <Footer/>
    </Fragment>

  );
}

export default App;
