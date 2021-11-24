import { Link } from "react-router-dom";

const TreatiesListItem = (props) => {
  const timeStamp = props.concluded;
  const date = new Date(timeStamp).toLocaleDateString("en-GB");
  return (
    <article>
      <header>
        <p>{props.name}</p>
      </header>
      <footer>
        <div>
          <div>{props.city}</div>
          <div>{date}</div>
          <Link className="link button headr__cta" to={`/treaties/${props.id}`}>
          <button type='button'>Check status</button> </Link>
        </div>
      </footer>
    </article>
  );
};
export default TreatiesListItem;
