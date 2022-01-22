import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesList from "./components/countries/CountriesList";
import TreatiesForCountry from "./components/countries/TreatiesForCountry";
import ParticipationList from "./components/participation/ParticipationList";
import AllTreaties from "./components/treaties/AllTreaties";
import TopicsList from "./components/topics/TopicsList";
import TreatiesForTopic from "./components/topics/TreatiesForTopic";
import Contact from "./components/about/Contact";
// import Organizations from "./components/organizations/Organizations";
import TreatiesForOrganization from "./components/organizations/TreatiesForOrganization";
import Home from "./components/home/Home";
import SearchResults from "./components/search/SearchResults";
import TreatyText from "./components/participation/TreatyText";
import OrganizationsList from "./components/organizations/OrganizationsList";
import About from "./components/about/About"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />}/> 
          <Route path="/contact" element={<Contact />}/> 
          <Route path="/countries/:countryId" element={<TreatiesForCountry />}/> 
          <Route path="/treaties/:treatyId/eng" element={<TreatyText/>}/> 
          <Route path="/treaties/:treatyId" element={<ParticipationList/>}/> 
          <Route path="/countries" element={<CountriesList />}/>
          <Route path="/topics/:topicId" element={<TreatiesForTopic />}/> 
          <Route path="/topics" element={<TopicsList />}/>
          <Route path="/treaties" element={<AllTreaties />}/>
          <Route path="/organizations/:id" element={<TreatiesForOrganization/>}/>
          <Route path="/organizations" element={<OrganizationsList/>}/>
          <Route path="/search/:keyword" element={<SearchResults/>}/>
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
