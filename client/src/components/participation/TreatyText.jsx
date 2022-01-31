import { useEffect, useState } from "react";
import { useParams } from "react-router";
import makeHtmlText from "../../helpers/make-html-text";
import convertDateToReadable from "../../helpers/readable-date";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../hepler-components/ScrollToTopButton";
import axiosApi from "../../api/axios-api";
const TreatyText = () => {
  const [text, setText] = useState("");
  const [header, setHeader] = useState();
  const treatyId = useParams().treatyId;

  useEffect(() => {
    axiosApi.get(`/treaties/${treatyId}/eng`).then((result) => {
      const name = result.data[0].name;
      const city = result.data[0].city;
      const concluded = result.data[0].concluded;
      const dateConcluded = concluded
        ? new Date(concluded).toLocaleDateString("en-GB")
        : null;
      const treatyEnteredIntoForce = result.data[0].entered_into_force;
      const dateTreatyEnteredIntoForce = treatyEnteredIntoForce
        ? new Date(treatyEnteredIntoForce).toLocaleDateString("en-GB")
        : null;
      const linkToStatus = `/treaties/${treatyId}`;
      const headerJSX = (
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
                  <span className="status-info">Entered into force: </span>
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
      );
      const rawText = result.data[0].text;
      setText(rawText);
      setHeader(headerJSX);
    });
  }, [treatyId]);

  return (
    <div className="container">
      <ScrollToTopButton />
      {header}
      
      <div>{makeHtmlText(text)}</div>
    </div>
  );
};

export default TreatyText;
