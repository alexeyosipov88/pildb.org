import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TreatiesListItem from "../treaties/TreatiesListItem";
// hague: 1 - 39; 40 - 65; unidroit 66 - 79; icao 80 - 93; wipo 94-117

const TreatiesForOrganization = () => {
  const [treatiesForOrganization, setTreatiesForOrganization] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/treaties").then((treaties) => {
      setTreatiesForOrganization(treaties.data);
    });
  }, []);

  const organizationInfromation = {
    hague: {
      name: "Hague Conference on Private International Law ",
    },
    un: {
      name: "United Nations",
    },
    unidroit: {
      name: "International Institute for the Unification of Private Law (UNIDROIT)",
    },
    icao: {
      name: "International Civil Aviation Organization",
    },
    wipo: {
      name: "World Intellectual Property Organization",
    },
  };
  const organizationName = useParams().organizationName;

  const filterByName = (organization, id) => {
    if (organization === "hague" && id >= 1 && id <= 39) {
      return true;
    }
    if (organization === "un" && id >= 40 && id <= 66) {
      return true;
    }
    if (organization === "unidroit" && id >= 66 && id <= 79) {
      return true;
    }
    if (organization === "icao" && id >= 80 && id <= 93) {
      return true;
    }
    if (organization === "wipo" && id >= 94 && id <= 117) {
      return true;
    }
    return false;
  };
  const filteredTreatiesForOrganization = treatiesForOrganization.filter(
    (elem) => {
      return filterByName(organizationName, elem.id);
    }
  );
  const listOfTreatiesForOrganization = filteredTreatiesForOrganization.map(
    (elem) => {
      return (
        <TreatiesListItem
          key={elem.id}
          id={elem.id}
          name={elem.name}
          city={elem.city}
          concluded={elem.concluded}
        />
      );
    }
  );
  return (
    <div>
      <header>
        <h1>{organizationInfromation[organizationName].name}</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name of the organization</th>
            <th>Participates in:</th>
          </tr>
        </thead>
        <tbody>{listOfTreatiesForOrganization}</tbody>
      </table>      
    </div>
  );
};
export default TreatiesForOrganization;
