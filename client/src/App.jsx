import "./styles/App.scss";
import Navbar from "./components/nav/Navbar";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/hepler-components/ScrollToTop";

function App() {
  return (
    <Fragment>
      <ScrollToTop/>
      <Navbar/>
      <main className='main-section'>
        <section className="main container flex flex-jc-sa flex-ai-c">
          <Outlet />
        </section>
      </main>
      <Footer/>
    </Fragment>

  );
}

export default App;
