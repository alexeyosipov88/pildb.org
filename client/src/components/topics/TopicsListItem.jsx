import { Link } from "react-router-dom";
import { Outlet } from "react-router";
const TopicsListItem = (props) => {
  let name = props.name;
  const firstLetter = name.charAt(0);
  const upperCaseFirstLetter = firstLetter.toUpperCase();
  name = name.replace(firstLetter, upperCaseFirstLetter);
  
  return (
    <article>
      <p>
        <Link className="link" to={`/topics/${props.id}`}>
        {name} 
        </Link>
      </p>
    </article>
  );
};
export default TopicsListItem;