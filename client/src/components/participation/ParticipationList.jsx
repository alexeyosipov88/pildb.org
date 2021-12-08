import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ParticipationListItem from "./ParticipationListItem";

const ParticipationList = (props) => {
  const [participation, setParticipation] = useState([]);
  const treatyId = useParams().treatyId;
  useEffect(() => {
    axios
      .get(`http://localhost:4000/participation/${treatyId}`)
      .then((participation) => {
        setParticipation(participation.data);
      });
  }, []);
  const treaty_name = participation[0] && participation[0].treaty_name;
  const city = participation[0] && participation[0].city;
  const concluded = participation[0] && participation[0].concluded;
  const dateConcluded = concluded
    ? new Date(concluded).toLocaleDateString("en-GB")
    : null;
  const treatyEnteredIntoForce =
    participation[0] && participation[0].treaty_entry_into_force;
  const dateTreatyEnteredIntoForce = treatyEnteredIntoForce
    ? new Date(treatyEnteredIntoForce).toLocaleDateString("en-GB")
    : null;
  console.log(participation);
  const listOfParticipation = participation.map((elem) => {
    return (
      <ParticipationListItem
        id={elem.id}
        country_name={elem.country_name}
        signed={elem.signed}
        bound={elem.bound}
        country_id={elem.country_id}
      />
    );
  });
  return (
    <div>
      <header>
        <h2>{treaty_name}</h2>
        <div>City of signature: {city}</div>
        <div>Signed: {dateConcluded}</div>
        <div>
          {dateTreatyEnteredIntoForce
            ? `Entered into force ${dateTreatyEnteredIntoForce}`
            : `Not yet into force`}
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name of the country</th>
            <th>Date of signature</th>
            <th>Date of ratification (acceptance)</th>
          </tr>
        </thead>
        <tbody>{listOfParticipation}</tbody>
      </table>
    </div>

    // <div>
    //   <header>
    //     <h2>{treaty_name}</h2>
    //     <div>City of signature: {city}</div>
    //     <div>Signed: {dateConcluded}</div>
    //     <div>
    //       {dateTreatyEnteredIntoForce
    //         ? `Entered into force ${dateTreatyEnteredIntoForce}`
    //         : `Not yet into force`}
    //     </div>
    //   </header>
    //   <div>{listOfParticipation}</div>
    // </div>
  );
};
export default ParticipationList;
