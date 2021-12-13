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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Link className="link" to={`/organizations/hague`}>
                Hague Conference
              </Link>
            </td>
            <td>
              39 treaties
              <Link className="link" to={`/organizations/hague`}>
                <img
                  className="more-info-icon"
                  src={moreInfoIcon}
                  alt="more-info-icon"
                />
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <Link className="link" to={`/organizations/un`}>
                United Nations
              </Link>
            </td>
            <td>
              26 treaties
              <Link className="link" to={`/organizations/un`}>
                <img
                  className="more-info-icon"
                  src={moreInfoIcon}
                  alt="more-info-icon"
                />
              </Link>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <Link className="link" to={`/organizations/unidroit`}>
                Unidroit
              </Link>
            </td>
            <td>
              14 treaties
              <Link className="link" to={`/organizations/unidroit`}>
                <img
                  className="more-info-icon"
                  src={moreInfoIcon}
                  alt="more-info-icon"
                />
              </Link>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <Link className="link" to={`/organizations/icao`}>
              International Civil Aviation Organization
              </Link>
            </td>
            <td>
              13 treaties
              <Link className="link" to={`/organizations/icao`}>
                <img
                  className="more-info-icon"
                  src={moreInfoIcon}
                  alt="more-info-icon"
                />
              </Link>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <Link className="link" to={`/organizations/wipo`}>
                World Intellectual Property Organization
              </Link>
            </td>
            <td>
              24 treaties
              <Link className="link" to={`/organizations/wipo`}>
                <img
                  className="more-info-icon"
                  src={moreInfoIcon}
                  alt="more-info-icon"
                />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Organizations;
