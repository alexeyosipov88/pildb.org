import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CountriesListItem from "./CountriesListItem";
import { Outlet } from "react-router";


const CountriesList = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      return await axios.get("http://localhost:4000/countries");
    }
    getAllCountries().
      then((countries) => {
        setCountries(countries.data);
    })
  }, [])
  const listOfCountries = countries.map(elem => {
    return (
    <div key={elem.id}> 
      <CountriesListItem name={elem.name} id={elem.id}/>
    </div>
      )
  })

  return (
    <div>
     {listOfCountries}
    </div>
  );
};
export default CountriesList;