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

  return (
    <table>
      <thead>
        <tr>
          <th>
            <p>Id</p>
          </th>
          <th>
            <p>Name of the treaty</p>
          </th>
          <th>
            <p>City of signature</p>
          </th>
          <th>
            <p>Date signed:</p>
          </th>
        </tr>
      </thead>
      <tbody>{listOfAllTreaties}</tbody>
    </table>
  );
};

export default AllTreaties;
