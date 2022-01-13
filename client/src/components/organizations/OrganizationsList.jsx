import { useEffect, useState } from "react";
import axios from "axios";
import OrganizationListItem from "./OrganizationListItem";
const OrganizationsList = () => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/organizations").then((organizations) => {
      setOrganizations(organizations.data);
    });
  }, []);

  let listOfOrganizations = organizations.map((elem) => {
    return (
      <OrganizationListItem key={elem.id} id={elem.id} name={elem.name} amount={elem.count} />
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
      {/* <tbody>

      </tbody> */}
      {/* <tbody>
        <tr>
          <td>
            <p>1</p>
          </td>
          <td>
            <Link className="link" to={`/organizations/hague`}>
              <p>Hague Conference</p>
            </Link>
          </td>
          <td>
            <p>39 treaties</p>
          </td>
          <td>
            <Link className="link" to={`/organizations/hague`}>
              <button className="more-info-btn">more info</button>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <p>2</p>
          </td>
          <td>
            <Link className="link" to={`/organizations/un`}>
              <p>United Nations</p>
            </Link>
          </td>
          <td>
            <p>26 treaties</p>
          </td>
          <td>
            <Link className="link" to={`/organizations/un`}>
              <button className="more-info-btn">more info</button>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <p>3</p>
          </td>
          <td>
            <Link className="link" to={`/organizations/unidroit`}>
              <p>Unidroit</p>
            </Link>
          </td>
          <td>
            <p>14 treaties</p>
          </td>
          <td>
            <Link className="link" to={`/organizations/unidroit`}>
              <button className="more-info-btn">more info</button>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <p>4</p>
          </td>
          <td>
            <Link className="link" to={`/organizations/icao`}>
              <p>International Civil Aviation Organization</p>
            </Link>
          </td>
          <td>
            <p>13 treaties</p>
          </td>
          <td>
            <Link
              className="link"
              to={`/organizations/icao`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="more-info-btn">more info</button>
            </Link>
          </td>
        </tr>
        <tr>
          <td>
            <p>5</p>
          </td>
          <td>
            <Link
              className="link"
              to={`/organizations/wipo`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>World Intellectual Property Organization</p>
            </Link>
          </td>
          <td>
            <p>24 treaties</p>
          </td>
          <td>
            <Link
              className="link"
              to={`/organizations/wipo`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="more-info-btn">more info</button>
            </Link>
          </td>
        </tr>
      </tbody> */}
    </table>
  );
};

export default OrganizationsList;
