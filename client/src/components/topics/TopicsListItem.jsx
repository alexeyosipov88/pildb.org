import moreInfoIcon from "../../images/more-info-icon.png";
import { Link } from "react-router-dom";
const TopicsListItem = (props) => {
  let name = props.name;
  name = name.split(" ");
  name = name.map((elem) => {
    if(elem.length > 2 && elem !== "and" && elem !== "the") {
      const firstLetter = elem.charAt(0);
      const upperCaseFirstLetter = firstLetter.toUpperCase();
      elem = elem.replace(firstLetter, upperCaseFirstLetter); 
    }
    return elem;
  }).join(" ");
  console.log(name);
  // const firstLetter = name.charAt(0);
  // const upperCaseFirstLetter = firstLetter.toUpperCase();
  // name = name.replace(firstLetter, upperCaseFirstLetter);

  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <Link className="link" to={`/topics/${props.id}`}>
          <p>{name}</p>
        </Link>
      </td>

      <td>
        <Link className="link" to={`/topics/${props.id}`}>
          {props.amount}
          {props.amount > 1 ? " treaties" : " treaty"}
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
export default TopicsListItem;
