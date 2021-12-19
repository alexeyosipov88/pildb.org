import { Link } from "react-router-dom";

const ParticipationListItem = (props) => {
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
        <p>{dateSigned}</p>
      </td>
      <td>
      <p className="th-mobile">Ratified (accepted): </p>
        <p>{dateBound}</p>
      </td>
    </tr>
  );
};
export default ParticipationListItem;
