import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TreatiesListItem from "../treaties/TreatiesListItem";
  
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
      info: `The Hague Conference on Private International Law (HCCH) is an intergovernmental organisation in the area of private international law (also known as conflict of laws), that administers several international conventions, protocols and soft law instruments.`,
    },
    un: {
      name: "United Nations",
      info: `The United Nations (UN) is an intergovernmental organization aiming to maintain international peace and security, develop friendly relations among nations, achieve international cooperation, and be a centre for harmonizing the actions of nations. It is the world's largest and most familiar international organization. The UN is headquartered on international territory in New York City, and has other main offices in Geneva, Nairobi, Vienna, and The Hague.`,
    },
    unidroit: {
      name: "International Institute for the Unification of Private Law (UNIDROIT)",
      info: `UNIDROIT (formally, the International Institute for the Unification of Private Law) is an intergovernmental organization whose objective is to harmonize international private law across countries through uniform rules, international conventions, and the production of model laws, sets of principles, guides and guidelines. Established in 1926 as part of the League of Nations, it was reestablished in 1940 following the League's dissolution through a multilateral agreement, the UNIDROIT Statute. As at 2019 UNIDROIT has 63 member states.`,
    },
    icao: {
      name: "International Civil Aviation Organization",
      info: `The International Civil Aviation Organization (ICAO) is a specialized and funding agency of the United Nations. It changes the principles and techniques of international air navigation and fosters the planning and development of international air transport to ensure safe and orderly growth. Its headquarters is located in the Quartier International of Montreal, Quebec, Canada.`,
    },
    wipo: {
      name: "World Intellectual Property Organization",
      info: `The World Intellectual Property Organization (WIPO) is one of the 15 specialized agencies of the United Nations (UN) Pursuant to the 1967 Convention Establishing the World Intellectual Property Organization, WIPO was created to promote and protect intellectual property (IP) across the world by cooperating with countries as well as international organizations. It began operations on 26 April 1970 when the convention entered into force.`,
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
  let id = 1;
  const listOfTreatiesForOrganization = filteredTreatiesForOrganization.map(
    (elem) => {
      return (
        <TreatiesListItem
          key={elem.id}
          tableId={id++}
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
        <p>{organizationInfromation[organizationName].info}</p>
        <p>
          Our database has {listOfTreatiesForOrganization.length} treaties
          administered by this international organization.
        </p>
      </header>
      <table>
        <thead>
          <tr>
            <th>
              <p>Id</p>
            </th>
            <th>
              <p>Name of the organization</p>
            </th>
            <th>
              <p>City of signature</p>
            </th>
            <th>
              <p>Date of signature</p>
            </th>
            <th>
              <p>Status</p>
            </th>
          </tr>
        </thead>
        <tbody>{listOfTreatiesForOrganization}</tbody>
      </table>
    </div>
  );
};
export default TreatiesForOrganization;
