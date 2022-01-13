import { Link } from "react-router-dom";

const OrganizationListItem = (props) => {
  
  return (
    <tr>
      <td>
        <p><span className="th-mobile"># </span> {props.id}</p>
      </td>
      <td>
        <p className="th-mobile">Name of the organization: </p>
        <Link className="link" to={`/organizations/${props.id}`}>
          <p>{props.name}</p>
        </Link>
      </td>
      <td>
        <p className="th-mobile">Number of treaties in database: </p>
        <p>
          {props.amount}
          {props.amount > 1 ? " treaties" : " treaty"}
        </p>
      </td>
      <td>
        <Link className="link" to={`/organizations/${props.id}`}>
          <button className="more-info-btn">more info</button>
        </Link>
      </td>
    </tr>
  );

}

export default OrganizationListItem;