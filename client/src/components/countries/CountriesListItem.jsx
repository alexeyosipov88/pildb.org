import { Link } from "react-router-dom";
import moreInfoIcon from "../../images/more-info-icon.png";

const CountriesListItem = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <Link className="link" to={`/countries/${props.id}`}>
          <p>{props.name}</p>
        </Link>
      </td>
        <Link className="link" to={`/countries/${props.id}`}>
      <td>
        {props.amount}{props.amount > 1 ? " treaties" : " treaty"}
          <img
            className="more-info-icon"
            src={moreInfoIcon}
            alt="more-info-icon"
          />
      </td>
        </Link>
    </tr>
  );
};
export default CountriesListItem;
