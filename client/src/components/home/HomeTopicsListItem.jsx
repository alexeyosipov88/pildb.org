import { Link } from "react-router-dom";
const TopicsListItem = (props) => {
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

  return (
    <div className="box-topic">
      <div className="topic-image-container">
        <Link
          className="link"
          to={`/topics/${props.id}`}
        >
          <img className="topic-image" src={props.img} alt={props.name} />
          <div>
            <p>{name}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default TopicsListItem;
