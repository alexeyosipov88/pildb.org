import axiosApi from "../../api/axios-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TreatiesList from "../treaties/TreatiesList";
import ScrollToTopButton from "../hepler-components/ScrollToTopButton";

const TreatiesForOrganization = () => {
  const [treatiesForOrganization, setTreatiesForOrganization] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const organizationId = useParams().id;

  useEffect(() => {
    const organizationsArr = axiosApi.get(`/organizations/`);
    const treatiesArr = axiosApi.get(`/organizations/${organizationId}`);
    Promise.all([organizationsArr, treatiesArr]).then((result) => {
      setOrganizations(result[0].data);
      setTreatiesForOrganization(result[1].data);
    });
   
  }, [organizationId]);
  let organizationName;
  organizations.forEach((elem) => {
    if (elem.id === Number(organizationId)) organizationName = elem.name;
  });

  const organizationInfromation = {
    1: `The Hague Conference on Private International Law (HCCH) is an intergovernmental organisation in the area of private international law (also known as conflict of laws), that administers several international conventions, protocols and soft law instruments.`,
    2: `The United Nations (UN) is an intergovernmental organization aiming to maintain international peace and security, develop friendly relations among nations, achieve international cooperation, and be a centre for harmonizing the actions of nations. It is the world's largest and most familiar international organization. The UN is headquartered on international territory in New York City, and has other main offices in Geneva, Nairobi, Vienna, and The Hague.`,
    3: `UNIDROIT (formally, the International Institute for the Unification of Private Law) is an intergovernmental organization whose objective is to harmonize international private law across countries through uniform rules, international conventions, and the production of model laws, sets of principles, guides and guidelines. Established in 1926 as part of the League of Nations, it was reestablished in 1940 following the League's dissolution through a multilateral agreement, the UNIDROIT Statute. As at 2019 UNIDROIT has 63 member states.`,
    4: `The International Civil Aviation Organization (ICAO) is a specialized and funding agency of the United Nations. It changes the principles and techniques of international air navigation and fosters the planning and development of international air transport to ensure safe and orderly growth. Its headquarters is located in the Quartier International of Montreal, Quebec, Canada.`,
    5: `The World Intellectual Property Organization (WIPO) is one of the 15 specialized agencies of the United Nations (UN) Pursuant to the 1967 Convention Establishing the World Intellectual Property Organization, WIPO was created to promote and protect intellectual property (IP) across the world by cooperating with countries as well as international organizations. It began operations on 26 April 1970 when the convention entered into force.`,
  };
  return (
    <div>
      <ScrollToTopButton/>
      <header>
        <h1>{organizationName}</h1>
        <p>{organizationInfromation[organizationId]}</p>
        <p>
          Our database has {treatiesForOrganization.length} treaties
          administered by this international organization.
        </p>
      </header>
      <TreatiesList treaties={treatiesForOrganization} />
    </div>
  );
};
export default TreatiesForOrganization;
