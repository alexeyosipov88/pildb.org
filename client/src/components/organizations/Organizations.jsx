import { Link } from "react-router-dom";

const Organizations = (props) => {
  return (
    <div>
      <header>
        
      </header>
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
              <Link className="link" to={`/organizations/hague`}  target="_blank" rel="noopener noreferrer">
                <p>Hague Conference</p>
              </Link>
            </td>
            <td>
              <p>39 treaties</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/hague`}  target="_blank" rel="noopener noreferrer">
                <button className="more-info-btn">more info</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <p>2</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/un`}  target="_blank" rel="noopener noreferrer">
                <p>United Nations</p>
              </Link>
            </td>
            <td>
              <p>26 treaties</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/un`}  target="_blank" rel="noopener noreferrer">
                <button className="more-info-btn">more info</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <p>3</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/unidroit`}  target="_blank" rel="noopener noreferrer">
                <p>Unidroit</p>
              </Link>
            </td>
            <td>
              <p>14 treaties</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/unidroit`}  target="_blank" rel="noopener noreferrer">
                <button className="more-info-btn">more info</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <p>4</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/icao`}  target="_blank" rel="noopener noreferrer">
                <p>International Civil Aviation Organization</p>
              </Link>
            </td>
            <td>
              <p>13 treaties</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/icao`}  target="_blank" rel="noopener noreferrer">
                <button className="more-info-btn">more info</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <p>5</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/wipo`}  target="_blank" rel="noopener noreferrer">
                <p>World Intellectual Property Organization</p>
              </Link>
            </td>
            <td>
              <p>24 treaties</p>
            </td>
            <td>
              <Link className="link" to={`/organizations/wipo`}  target="_blank" rel="noopener noreferrer">
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
