import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ParticipationListItem from "./ParticipationListItem";

// import CountriesListItem from "./CountriesListItem";

const ParticipationList = (props) => {
  const [participation, setParticipation] = useState([]);
  const treatyId = useParams().treatyId;
  useEffect(() => {
    const getParticipation = async () => {
      return await axios.get(`http://localhost:4000/participation/${treatyId}`);
    };
    getParticipation().then((participation) => {
      setParticipation(participation.data);
    });
  }, []);
  const treaty_name = participation[0] && participation[0].treaty_name;
  const city = participation[0] && participation[0].city;
  const concluded = participation[0] && participation[0].concluded;
  const treatyEnteredIntoForce = participation[0] && participation[0].treaty_entry_into_force;
  const treatyStatus = participation[0] && participation[0].treaty_status;
  
  console.log(treatyStatus, "this is treaty status")


  console.log(participation);
  const listOfParticipation = participation.map((elem) => {
    return (
      <div key={elem.id}>
        <ParticipationListItem
          id={elem.id}
          country_name={elem.country_name}
          signed={elem.signed}
          concluded={elem.concluded}
        />  
      </div>
    );
  });

  return (
    <div>
      <header>
          <h2>{treaty_name}</h2>
          <div>{city}</div>
          <div>{concluded}</div>
          <div>{city}</div>
          <div>{treatyEnteredIntoForce ? `Entered into force ${treatyEnteredIntoForce}` : `Not yet into force`}</div>
      </header>
      <div>
      {listOfParticipation}
      </div>
    </div>
  );
};
export default ParticipationList;
