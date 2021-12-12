import { Link } from "react-router-dom";
import { Outlet } from "react-router";
const TopicsListItem = (props) => {
  let name = props.name;
  const firstLetter = name.charAt(0);
  const upperCaseFirstLetter = firstLetter.toUpperCase();
  name = name.replace(firstLetter, upperCaseFirstLetter);
  return (
    <div className="box-topic">
      <div> 
        <img className="topic-image" src={props.img} alt={props.name} />
        <div>
          <Link className="link" to={`/topics/${props.id}`}>
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TopicsListItem;
