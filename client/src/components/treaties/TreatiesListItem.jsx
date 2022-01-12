import { Link } from "react-router-dom";

const TreatiesListItem = (props) => {
  let name = props.name;
  name = name.split(" ");
  name = name
    .map((elem) => {
      if (elem.length > 2 && elem !== "and" && elem !== "the") {
        const firstLetter = elem.charAt(0);
        const upperCaseFirstLetter = firstLetter.toUpperCase();
        elem = elem.replace(firstLetter, upperCaseFirstLetter);
      }
      return elem;
    })
    .join(" ");
  const timeStamp = props.concluded;
  const date = new Date(timeStamp).toLocaleDateString("en-GB");
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
  return (
    <tr>
      <td>
        <p>
          <span className="th-mobile"># </span>
          {props.tableId}
        </p>
      </td>
      <td>
        <p className="th-mobile">Name of the treaty:</p>
        <Link className="link" to={`/treaties/${props.id}`}  target="_blank" rel="noopener noreferrer">
          <p>{name}</p>
        </Link>
      </td>
      <td>
        <p className="th-mobile">City of signature</p>
        <p>{props.city}</p>
      </td>
      <td>
        <p className="th-mobile">Signed:</p>
        <p>{convertDateToYearMonthFormat(date)}</p>
      </td>
      <td>
        <div key={props.id}>
          <Link to={`/treaties/${props.id}`}>
            <button className="status-btn" type="button"  target="_blank" rel="noopener noreferrer">
              check status
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};
export default TreatiesListItem;
