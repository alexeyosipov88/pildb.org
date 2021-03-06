import axiosApi from "../../api/axios-api";
import { useEffect, useState } from "react";
import TreatiesListItem from "./TreatiesListItem";
import ScrollToTopButton from "../hepler-components/ScrollToTopButton";
import PaddingBeforeRender from "../hepler-components/PaddingBeforeRender";
 

const AllTreaties = () => {
  const [allTreaties, setAllTreaties] = useState([]);
  const [header, setHeader] = useState();
  const [tableHead, setTableHead] = useState();

  useEffect(() => {
    axiosApi.get("/treaties").then((treaties) => {
      setAllTreaties(treaties.data);
      const headerJSX = (
        <header>
          <p>
            Our database contains information about the status of {treaties.data.length} multilateral treaties related to private
            international law. You can browse them by participating countries,
            topics and administrating organization.
          </p>
        </header>
      );
      const theadJSX = (
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
      );
      setTableHead(theadJSX);
      setHeader(headerJSX);
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
      <ScrollToTopButton />
      {!header && <PaddingBeforeRender />}
      {header}
      <div>
        <table>
          {tableHead} 
          <tbody>{listOfAllTreaties}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTreaties;
