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
  return (
    <tr>
      <td>
        <p>
          <span className="th-mobile"># </span>
          {props.id}
        </p>
      </td>
      <td>
        <p className="th-mobile">Name of the treaty:</p>
        <Link className="link" to={`/treaties/${props.id}`}>
          <p>{name}</p>
        </Link>
      </td>
      <td>
        <p className="th-mobile">City of signature</p>
        <p>{props.city}</p>
      </td>
      <td>
        <p className="th-mobile">Signed:</p>
        <p>{date}</p>
      </td>
      <td>
        <div key={props.id}>
          <Link to={`/treaties/${props.id}`}>
            <button className="status-btn" type="button">
              check status
            </button>
          </Link>
        </div>
      </td>
    </tr>

    // <article>
    //   <header>
    //     <p>{props.name}</p>
    //   </header>
    //   <footer>
    //     <div>
    //       <div>{props.city}</div>
    //       <div>{date}</div>
    //       <Link className="link button" to={`/treaties/${props.id}`}>
    //       <button type='button'>Check status</button> </Link>
    //     </div>
    //   </footer>
    // </article>
  );
};
export default TreatiesListItem;
