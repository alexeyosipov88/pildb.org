import { Link } from "react-router-dom";

const TreatiesListItem = (props) => {
  const timeStamp = props.concluded;
  const date = new Date(timeStamp).toLocaleDateString("en-GB");
  return (
    <tr>
      <td>{props.id}</td>
      <td>
        <Link className="link" to={`/treaties/${props.id}`}>
          <p>{props.name}</p>
        </Link>
      </td>
      <td>{props.city}</td>
      <td>{date}</td>
      <td>
        <div key={props.id}>
          <Link to={`/treaties/${props.id}`}>
            <button className="status-btn" type="button">check status</button>
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
