import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import TreatiesListItem from "./TreatiesListItem";

const TreatiesList = (props) => {
  const listOfTreaties = props.treaties.map(elem => {
    return <TreatiesListItem key={elem.treaty_id} id={elem.id} name={elem.name} city={elem.city} concluded={elem.concluded}/>
  })
  return (
    <div>
     {listOfTreaties}
    </div>
  );
};
export default TreatiesList;