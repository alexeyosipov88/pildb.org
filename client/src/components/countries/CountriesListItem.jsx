import { Link } from "react-router-dom";
import { Outlet } from "react-router";
const CountriesListItem = (props) => {
  return (
    <article>
      <p>
        <Link className="link" to={`/countries/${props.id}`}>
        {props.name} 
        </Link>
      </p>
      <Outlet/>
    </article>
  );
};
export default CountriesListItem;