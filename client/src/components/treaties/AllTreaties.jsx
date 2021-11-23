import axios from "axios";
import { useEffect, useState } from "react";
import TreatiesListItem from "./TreatiesListItem";

const AllTreaties = () => {
  const [allTreaties, setAllTreaties] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/treaties").then((treaties) => {
      setAllTreaties(treaties.data);
    });
  }, []);
  console.log(allTreaties);
  const listOfAllTreaties = allTreaties.map((elem) => {
    return (
      <TreatiesListItem
        key={elem.id}
        id={elem.id}
        name={elem.name}
        city={elem.city}
        concluded={elem.concluded}
      />
    );
  });

  return <div>{listOfAllTreaties}</div>;
};

export default AllTreaties;
