import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import makeHtmlText from "../../helpers/make-html-text";
import convertDateToReadable from "../../helpers/readable-date";
import { Link } from "react-router-dom";
import axiosApi
 from "../../api/axios-api";
const TreatyText = () => {
  const [treaty, setTreaty] = useState({});
  const treatyId = useParams().treatyId;
  useEffect(() => {
    axiosApi.get(`/treaties/${treatyId}/eng`).then((result) => {
      setTreaty(result.data[0]);
    });
  }, [treatyId]);
  const name = treaty && treaty.name;
  const text = treaty && treaty.text;
  const city = treaty && treaty.city;
  const concluded = treaty && treaty.concluded;
  const dateConcluded = concluded
    ? new Date(concluded).toLocaleDateString("en-GB")
    : null;
  const treatyEnteredIntoForce = treaty && treaty.entered_into_force;
  const dateTreatyEnteredIntoForce = treatyEnteredIntoForce
    ? new Date(treatyEnteredIntoForce).toLocaleDateString("en-GB")
    : null;
  const linkToStatus = `/treaties/${treatyId}`;
  return (
    <div className="container">
      <header>
        <h2>{name}</h2>
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
                <span className="status-info">Entered in force: </span>
                {convertDateToReadable(dateTreatyEnteredIntoForce)}
              </span>
            ) : (
              <span className="not-in-force">Not yet in force</span>
            )}
          </p>
        </div>
        <div>
          <Link to={linkToStatus} className="link">
            <p>Check status</p>
          </Link>
        </div>
      </header>
      <div>{makeHtmlText(text)}</div>
    </div>
  );
};

export default TreatyText;
