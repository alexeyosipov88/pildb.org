import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import ParticipationListItem from "./ParticipationListItem";
import { Link } from "react-router-dom";

const ParticipationList = () => {
  const [participation, setParticipation] = useState([]);
  const treatyId = useParams().treatyId;
  useEffect(() => {
    axios
      .get(`http://localhost:4000/participation/${treatyId}`)
      .then((participation) => {
        setParticipation(participation.data);
      });
  }, [treatyId]);
  let treaty_name = participation[0] && participation[0].treaty_name;
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

  const city = participation[0] && participation[0].city;
  const concluded = participation[0] && participation[0].concluded;

  const convertDateToReadable = (date) => {
    if (!date) {
      return;
    }
    const monthObj = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      10: "October",
      11: "November",
      12: "December",
    };
    date = date.split("/");
    date[1] = monthObj[date[1]];
    date[0] = date[0].charAt(0) === "0" ? date[0].slice(1) : date[0];
    date = date.join(" ");
    return date;
  };
  const dateConcluded = concluded
    ? new Date(concluded).toLocaleDateString("en-GB")
    : null;
  const treatyEnteredIntoForce =
    participation[0] && participation[0].treaty_entry_into_force;
  const dateTreatyEnteredIntoForce = treatyEnteredIntoForce
    ? new Date(treatyEnteredIntoForce).toLocaleDateString("en-GB")
    : null;
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
              <span className="not-in-force">Not yet into force</span>
            )}
          </p>
        </div>
        <div>
          <Link to="eng" className="link">
            <p>Read text</p>
          </Link>
        </div>
      </header>
      <table>
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
        <tbody>{listOfParticipation}</tbody>
      </table>
    </div>
  );
};
export default ParticipationList;
