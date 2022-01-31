import { useEffect, useState } from "react";
import axiosApi from "../../api/axios-api";
import OrganizationListItem from "./OrganizationListItem";
import ScrollToTopButton from "../hepler-components/ScrollToTopButton";
import PaddingBeforeRender from "../hepler-components/PaddingBeforeRender";

const OrganizationsList = () => {
  const [organizations, setOrganizations] = useState([]);
  const [header, setHeader] = useState();
  const [tableHead, setTableHead] = useState();


  useEffect(() => {
    axiosApi.get("/organizations").then((organizations) => {
      setOrganizations(organizations.data);
      const headerJSX = (
        <header>
          Our database contains information about the status of multilateral
          treaties related to private international law. You can browse them by
          the following administrating organizations.
        </header>
      );
      const theadJSX = (
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
      );
      setTableHead(theadJSX);
      setHeader(headerJSX);
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
      <ScrollToTopButton />
      {!header && <PaddingBeforeRender />}
      {header}
      <div>
        <table>
          {tableHead}
          <tbody>{listOfOrganizations}</tbody>
        </table>
      </div>
    </div>
  );
};

export default OrganizationsList;
