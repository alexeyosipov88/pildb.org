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
      <td>
        {props.amount} treaties
        <Link className="link" to={`/countries/${props.id}`}>
          <img
            className="more-info-icon"
            src={moreInfoIcon}
            alt="more-info-icon"
          />
        </Link>
      </td>
    </tr>
  );
};
export default CountriesListItem;
