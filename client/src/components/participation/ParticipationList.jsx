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
      return await axios.get(`http://localhost:4000/treaties/${treatyId}`);
    }
    getParticipation().
      then((participation) => {
        setParticipation(participation.data);
    })
  }, [])
  const listOfParticipation = participation.map(elem => {
    return (
    <div key={elem.id}> 
      <ParticipationListItem id={elem.id}/>
    </div>
      )
  })

  return (
    <div>
     {listOfParticipation}
    </div>
  );
};
export default ParticipationList;