import { Link } from "react-router-dom";
import moreInfoIcon from "../../images/more-info-icon.png";

const CountriesListItem = (props) => {
  return (
    <tr>
      <td>
        <p><span className="th-mobile"># </span> {props.id}</p>
      </td>
      <td>
        <p className="th-mobile">Name of the country: </p>
        <Link className="link" to={`/countries/${props.id}`}>
          <p>{props.name}</p>
        </Link>
      </td>
      <td>
        <p className="th-mobile">Participates in: </p>
        <p>
          {props.amount}
          {props.amount > 1 ? " treaties" : " treaty"}
        </p>
      </td>
      <td>
        <Link className="link" to={`/countries/${props.id}`}>
          <button className="more-info-btn">more info</button>
        </Link>
      </td>
    </tr>
  );
};
export default CountriesListItem;
