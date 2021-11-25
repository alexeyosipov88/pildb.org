import { Link } from "react-router-dom";

const ParticipationListItem = (props) => {

  const dateSigned =  props.signed ? new Date(props.signed).toLocaleDateString("en-GB") : null;
  const dateBound = props.bound ? new Date(props.bound).toLocaleDateString("en-GB") : null;
  return (
    <article>
      <header>
        <Link className="link" to={`/countries/${props.country_id}`}>
        <p>{props.country_name}</p>
        </Link>
      </header>
      <footer>
        <div>
          <div>Date signed: {dateSigned}</div>
          <div>Date of ratification (acceptance): {dateBound}</div>
        </div>
      </footer>
    </article>
  );
};
export default ParticipationListItem;
