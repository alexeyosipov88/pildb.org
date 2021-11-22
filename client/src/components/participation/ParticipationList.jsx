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
  console.log(participation)
  const listOfParticipation = participation.map((elem) => {
    return (
      <div key={elem.id}>
        <ParticipationListItem id={elem.id} />
      </div>
    );
  });

  return (
    <div>
      <header>
        <h2>{treaty_name}</h2>
      </header>
      {listOfParticipation}
    </div>
  );
};
export default ParticipationList;
