import { useState } from "react";
import { useEffect } from "react";
import axiosApi from "../../api/axios-api";
import { useParams } from "react-router-dom";
import TreatiesList from "../treaties/TreatiesList";
import ScrollToTopButton from "../hepler-components/ScrollToTopButton";

const TreatiesForCountry = () => {
  const [treaties, setTreaties] = useState([]);
  const countryId = useParams().countryId;

  useEffect(() => {
    axiosApi.get(`/countries/${countryId}`).then((treaties) => {
        setTreaties(treaties.data);
    })
  }, [countryId])
  const country_name = treaties[0] && treaties[0].country_name
  return (
    <div>
      <ScrollToTopButton/>
      <header>
        <h1>
          {country_name}
        </h1>
        <p>This country participates in {treaties.length} multilateral treaties related to private international law.</p>
      </header>
      <TreatiesList treaties={treaties}/>
    </div>
  )
}

export default TreatiesForCountry;