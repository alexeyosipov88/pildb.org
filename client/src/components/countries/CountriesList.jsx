import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CountriesListItem from "./CountriesListItem";

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
    return <CountriesListItem key={elem.id} name={elem.name}/>
  })

  return (
    <div>
     {listOfCountries}
    </div>
  );
};
export default CountriesList;