import { Link } from "react-router-dom";

const ParticipationListItem = (props) => {
  const convertDateToYearMonthFormat = (date) => {
    if(!date) {
      return;
    }
    date = date.split("/");
    const tmp = date[0];
    date[0] = date[2];
    date[2] = tmp;
    return date.join("/");

  }
  const dateSigned = props.signed
    ? new Date(props.signed).toLocaleDateString("en-GB")
    : null;
  const dateBound = props.bound
    ? new Date(props.bound).toLocaleDateString("en-GB")
    : null;
  return (
    <tr>
      <td>
        <p>
          <span className="th-mobile"># </span>
          {props.id}
        </p>
      </td>
      <td>
        <p className="th-mobile">Name of a treaty:</p>
        <Link className="link" to={`/countries/${props.country_id}`}>
          <p>{props.country_name}</p>
        </Link>
      </td>
      <td>
      <p className="th-mobile">Signed:</p>
        <p>{convertDateToYearMonthFormat(dateSigned)}</p>
      </td>
      <td>
      <p className="th-mobile">Ratified (accepted): </p>
        <p>{convertDateToYearMonthFormat(dateBound)}</p>
      </td>
    </tr>
  );
};
export default ParticipationListItem;
