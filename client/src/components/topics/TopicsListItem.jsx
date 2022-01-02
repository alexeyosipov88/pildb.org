import { Link } from "react-router-dom";
const TopicsListItem = (props) => {
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

  return (
    <tr>
      <td>
        <p>
          <span className="th-mobile"># </span>
          {props.id}
        </p>
      </td>
      <td>
        <p className="th-mobile">Name of organization:</p>
        <Link className="link" to={`/topics/${props.id}`}  target="_blank" rel="noopener noreferrer">
          <p>{name}</p>
        </Link>
      </td>
      <td>
        <p className="th-mobile">Amount of treaties in database:</p>
        <p>
          {props.amount}
          {props.amount > 1 ? " treaties" : " treaty"}
        </p>
      </td>
      <td>
        <Link className="link" to={`/topics/${props.id}`}  target="_blank" rel="noopener noreferrer">
          <button className="more-info-btn">more info</button>
        </Link>
      </td>
    </tr>
  );
};
export default TopicsListItem;
