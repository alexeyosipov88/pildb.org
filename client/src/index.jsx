import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss"
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesList from "./components/countries/CountriesList";
import TreatiesForCountry from "./components/countries/TreatiesForCountry";
import ParticipationList from "./components/participation/ParticipationList";
import AllTreaties from "./components/treaties/AllTreaties";
import TopicsList from "./components/topics/TopicsList";
import TreatiesForTopic from "./components/topics/TreatiesForTopic";
import Organizations from "./components/organizations/Organizations";
import TreatiesForOrganization from "./components/organizations/TreatiesForOrganization";
import Home from "./components/home/Home";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/countries/:countryId" element={<TreatiesForCountry />}/> 
          <Route path="/treaties/:treatyId" element={<ParticipationList/>}/> 
          <Route path="/countries" element={<CountriesList />}/>
          <Route path="/topics/:topicId" element={<TreatiesForTopic />}/> 
          <Route path="/topics" element={<TopicsList />}/>
          <Route path="/treaties" element={<AllTreaties />}/>
          <Route path="/organizations/:organizationName" element={<TreatiesForOrganization/>}/>
          <Route path="/organizations" element={<Organizations/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
