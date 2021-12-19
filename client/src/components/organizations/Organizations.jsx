import { Link } from "react-router-dom";
import moreInfoIcon from "../../images/more-info-icon.png";

const Organizations = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name of the organization</th>
            <th>Number of treaties in database:</th>
            <th>More info</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>1</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/hague`}>
                <p>Hague Conference</p>
              </Link>
            </td>
            <td>
              <p>39 treaties</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/hague`}>
                <button className="more-info-btn">more info</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <p>2</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/un`}>
                <p>United Nations</p>
              </Link>
            </td>
            <td>
              <p>26 treaties</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/un`}>
                <button className="more-info-btn">more info</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <p>3</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/unidroit`}>
                <p>Unidroit</p>
              </Link>
            </td>
            <td>
              <p>14 treaties</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/unidroit`}>
                <button className="more-info-btn">more info</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <p>4</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/icao`}>
                <p>International Civil Aviation Organization</p>
              </Link>
            </td>
            <td>
              <p>13 treaties</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/icao`}>
                <button className="more-info-btn">more info</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <p>5</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/wipo`}>
                <p>World Intellectual Property Organization</p>
              </Link>
            </td>
            <td>
              <p>24 treaties</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/wipo`}>
                <button className="more-info-btn">more info</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Organizations;
