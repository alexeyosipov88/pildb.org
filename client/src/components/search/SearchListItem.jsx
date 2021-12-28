import { useState, useEffect } from "react";
import axios from "axios";

const SearchListItem = (props) => {
  let countTreatiesForCountries;
  useEffect(async () => {
    console.log('use effect started!')
    if (props.type === "country") {
      countTreatiesForCountries = await axios.get(
        "http://localhost:4000/count-treaties"
      )
      console.log("COUNTRY!")
      console.log(countTreatiesForCountries.data.find(elem => elem.id === props.id), "count treaties");
    }
  });


  return (
    <div>
      <div>
        <a href="">{props.name}</a>
      </div>
    </div>
  );
};

export default SearchListItem;
