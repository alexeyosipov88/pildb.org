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
        {props.amount}
        {props.amount > 1 ? " treaties" : " treaty"}
      </td>
      <td>
        <button className="more-info-btn">more info</button>
      </td>
    </tr>
  );
};
export default CountriesListItem;
