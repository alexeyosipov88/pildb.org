import axios from "axios";
import { useEffect, useState } from "react";
import TreatiesListItem from "./TreatiesListItem";

const AllTreaties = () => {
  const [allTreaties, setAllTreaties] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/api/treaties").then((treaties) => {
      setAllTreaties(treaties.data);
    });
  }, []);

  let id = 1;
  if (allTreaties && allTreaties.length > 0) {
    allTreaties.sort((a, b) => {
      if (a.concluded > b.concluded) {
        return 1;
      } else if (a.concluded < b.concluded) {
        return -1;
      } else return 0;
    });
  }

  const listOfAllTreaties = allTreaties.map((elem) => {
    return (
      <TreatiesListItem
        key={elem.id}
        tableId={id++}
        id={elem.id}
        name={elem.name}
        city={elem.city}
        concluded={elem.concluded}
      />
    );
  });

  return (
    <div className="header-and-table">
      <header>
        <p>
          Our database contains information about the status of
          {allTreaties.length} multilateral treaties related to private
          international law. You can browse them by participating countries,
          topics and administrating organization.
        </p>
      </header>
      <div>
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
              <th>
                <p>Check status</p>
              </th>
            </tr>
          </thead>
          <tbody>{listOfAllTreaties}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTreaties;
