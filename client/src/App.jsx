import "./styles/App.scss";
import Navbar from "./components/nav/Navbar";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <main className='main-section'>
        <section className="main container flex flex-jc-sa flex-ai-c">
          <Outlet />
        </section>
      </main>
      <div>Icons made by <a href="https://www.flaticon.com/authors/creatype" title="Creatype">Creatype</a>, <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/geotatah" title="geotatah">geotatah</a>, <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a>, <a href="https://www.flaticon.com/authors/justicon" title="justicon">justicon</a>,   from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </Fragment>
  );
}

export default App;
