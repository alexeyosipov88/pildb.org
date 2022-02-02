import { useState } from "react";
import { useEffect } from "react";
import axiosApi from "../../api/axios-api";
import { useParams } from "react-router";
import ParticipationListItem from "./ParticipationListItem";
import { Link } from "react-router-dom";
import convertDateToReadable from "../../helpers/readable-date";
import ScrollToTopButton from "../hepler-components/ScrollToTopButton";
import PaddingBeforeRender from "../hepler-components/PaddingBeforeRender";


const ParticipationList = () => {
  const [header, setHeader] = useState();
  const [tableHead, setTableHead] = useState();

  const [participation, setParticipation] = useState([]);
  const treatyId = useParams().treatyId;
  useEffect(() => {
    axiosApi.get(`/treaties/${treatyId}`).then((participation) => {
      setParticipation(participation.data);
      let treaty_name = participation.data[0].treaty_name;
      if (treaty_name) {
        treaty_name = treaty_name.split(" ");
        treaty_name = treaty_name
          .map((elem) => {
            if (elem.length > 2 && elem !== "and" && elem !== "the") {
              const firstLetter = elem.charAt(0);
              const upperCaseFirstLetter = firstLetter.toUpperCase();
              elem = elem.replace(firstLetter, upperCaseFirstLetter);
            }
            return elem;
          })
          .join(" ");
      }
      const city = participation.data[0].city;
      const concluded = participation.data[0].concluded;
      const dateConcluded = concluded
        ? new Date(concluded).toLocaleDateString("en-GB")
        : null;
      const treatyEnteredIntoForce = participation.data[0].treaty_entry_into_force;
      const dateTreatyEnteredIntoForce = treatyEnteredIntoForce
        ? new Date(treatyEnteredIntoForce).toLocaleDateString("en-GB")
        : null;
      
        const headerJSX = (
          <header>
            <h2>{treaty_name}</h2>
            <div>
              <p>
                <span className="status-info">City of signature: </span>
                {city}
              </p>
            </div>
            <div>
              <p>
                <span className="status-info">Signed: </span>
                {convertDateToReadable(dateConcluded)}
              </p>
            </div>
            <div>
              <p>
                {dateTreatyEnteredIntoForce ? (
                  <span>
                    <span className="status-info">Entered into force: </span>
                    {convertDateToReadable(dateTreatyEnteredIntoForce)}
                  </span>
                ) : (
                  <span className="not-in-force">Not yet in force</span>
                )}
              </p>
            </div>
            <div>
              <Link to="eng" className="link">
                <p>Read text</p>
              </Link>
            </div>
          </header>
        );
        const theadJSX = (
          <thead>
            <tr>
              <th>
                <p>Id</p>
              </th>
              <th>
                <p>Name of the country</p>
              </th>
              <th>
                <p>Date of signature</p>
              </th>
              <th>
                <p>Date of ratification/ acceptance/ accession</p>
              </th>
            </tr>
          </thead>
        );
        setTableHead(theadJSX);
        setHeader(headerJSX);
    });
      
  }, [treatyId]);
  
  let id = 1;
  const listOfParticipation = participation.map((elem) => {
    return (
      <ParticipationListItem
        key={elem.id}
        id={id++}
        country_name={elem.country_name}
        signed={elem.signed}
        bound={elem.bound}
        country_id={elem.country_id}
      />
    );
  });
  return (
    <div>
      <ScrollToTopButton />
      {!header && <PaddingBeforeRender />}
      {header} 
      <table>
        {tableHead}
       
        <tbody>{listOfParticipation}</tbody>
      </table>
    </div>
  );
};
export default ParticipationList;
