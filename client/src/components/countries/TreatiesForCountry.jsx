import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TreatiesList from "../Treaties/TreatiesList";

const TreatiesForCountry = (props) => {
  const [treaties, setTreaties] = useState([]);
  const countryId = useParams().countryId;
  useEffect(() => {
    const getTreatiesByCountry = async () => {
      return await axios.get(`http://localhost:4000/countries/${countryId}`);
    }
    getTreatiesByCountry().
      then((treaties) => {
        setTreaties(treaties.data);
    })
  }, [])
  const country_name = treaties[0] && treaties[0].country_name
  console.log(treaties)
  return (
    <div>
      <header>
        <h1>
          {country_name}
        </h1>
      </header>
      <TreatiesList treaties={treaties}/>
    </div>
  )
}

export default TreatiesForCountry;