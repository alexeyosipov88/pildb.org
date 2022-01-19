import { useEffect, useState } from "react";
import axios from "axios";
import axiosApi from "../../api/axios-api";
import OrganizationListItem from "./OrganizationListItem";
const OrganizationsList = () => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    axiosApi.get("/organizations").then((organizations) => {
      setOrganizations(organizations.data);
    });
  }, []);

  let listOfOrganizations = organizations.map((elem) => {
    return (
      <OrganizationListItem
        key={elem.id}
        id={elem.id}
        name={elem.name}
        amount={elem.count}
      />
    );
  });

  return (
    <div className="header-and-table">
      <header>Our database contains information about the status of multilateral treaties related to private international law. You can browse them by following organizations wich administer said treaties.</header>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <p>Id</p>
              </th>
              <th>
                <p>Name of the organization</p>
              </th>
              <th>
                <p>Number of treaties in database:</p>
              </th>
              <th>
                <p>More info</p>
              </th>
            </tr>
          </thead>
          <tbody>{listOfOrganizations}</tbody>
        </table>
      </div>
    </div>
  );
};

export default OrganizationsList;
