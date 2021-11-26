import logo from "./images/logo.jpg";
import "./styles/App.scss";
import { useState } from "react";
import Navbar from "./components/nav/Navbar";
// import "./App.css";
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
      <div>Icons made by <a href="https://www.flaticon.com/authors/juicy-fish" title="juicy_fish">juicy_fish</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </Fragment>
  );
}

export default App;
