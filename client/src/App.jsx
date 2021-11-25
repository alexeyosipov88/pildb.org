import logo from "./images/logo.jpg";
import "./styles/App.scss";
import { useState } from "react";
import Navbar from "./components/nav/Navbar";
// import "./App.css";
import { Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
       
      </header>

      <Outlet />
    </div>
  );
}

export default App;
