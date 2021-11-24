import { Link } from "react-router-dom";
const Organizations = (props) => {
  return (
    <div>
      <p>
        <Link className="link" to={`/organizations/hague`}>Hague Conference</Link>
      </p>
      <p>
        <Link className="link" to={`/organizations/un`}>United Nations</Link>
      </p>
      <p>
        <Link className="link" to={`/organizations/unidroit`}>Unidroit</Link>
      </p>
      <p>
        <Link className="link" to={`/organizations/icao`}>
          International Civil Aviation Organization
        </Link>
      </p>
      <p>
        <Link className="link" to={`/organizations/wipo`}>
          World Intellectual Property Organization
        </Link>
      </p>
    </div>
  );
};

export default Organizations;
