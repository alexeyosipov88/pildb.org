import { Link } from "react-router-dom";
import { Outlet } from "react-router";
const TopicsListItem = (props) => {
  return (
    <article>
      <p>
        <Link to={`/topics/${props.id}`}>
        {props.name} 
        </Link>
      </p>
      <Outlet/>
    </article>
  );
};
export default TopicsListItem;