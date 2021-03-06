import { useState } from "react";
import { useEffect } from "react";
import axiosApi from "../../api/axios-api";
import { useParams } from "react-router-dom";
import TreatiesList from "../treaties/TreatiesList";
import ScrollToTopButton from "../hepler-components/ScrollToTopButton";
import PaddingBeforeRender from "../hepler-components/PaddingBeforeRender";



const TreatiesForCountry = () => {
  const [treaties, setTreaties] = useState([]);
  const [header, setHeader] = useState();
  const countryId = useParams().countryId;
  


  useEffect(() => {
    axiosApi.get(`/countries/${countryId}`).then((treaties) => {
      setTreaties(treaties.data);
      const country_name = treaties.data[0].country_name;
      const headerJSX = (
        <header>
          <h1>{country_name}</h1>
          <p>
            This country participates in {treaties.data.length} multilateral treaties
            related to private international law.
          </p>
        </header>
      );
      setHeader(headerJSX);
    });
  }, [countryId]);
  return (
    <div>
      <ScrollToTopButton />
      {!header && <PaddingBeforeRender />}
      {header}
      <TreatiesList treaties={treaties} />
    </div>
  );
};

export default TreatiesForCountry;
