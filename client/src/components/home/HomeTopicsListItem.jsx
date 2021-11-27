
import { Link } from "react-router-dom";
import { Outlet } from "react-router";
const TopicsListItem = (props) => {
  return (
      <div className="box-topic">
        <div>
          <img src={props.img} alt="" />
        <Link className="link" to={`/topics/${props.id}`}>
        {props.name} 
        </Link>
        </div>
      </div>
  );
};
export default TopicsListItem;