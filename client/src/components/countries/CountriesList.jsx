import { useState } from "react";
import { useEffect } from "react";
import axiosApi from "../../api/axios-api";
import CountriesListItem from "./CountriesListItem";
import ScrollToTopButton from "../hepler-components/ScrollToTopButton";
const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [header, setHeader] = useState();
  const [tableHead, setTableHead] = useState();

  const [countTreatiesForCountries, setCountTreatiesForCountries] = useState(
    []
  );
  useEffect(() => {
    const countTreatiesForCountries = axiosApi.get("/count-treaties");
    const getCountries = axiosApi.get("/countries");

    Promise.all([countTreatiesForCountries, getCountries]).then((result) => {
      setCountTreatiesForCountries(result[0].data);
      setCountries(result[1].data);
      const headerJSX = (
        <header>
          <p>
            The database contains information about the participation of {result[0].data.length} countries in multilateral treaties related to
            private international law.
          </p>
        </header>
      );
      setHeader(headerJSX);
      const theadJSX = (
        <thead>
          <tr>
            <th>
              <p>Id</p>
            </th>
            <th>
              <p>Name of the country</p>
            </th>
            <th>
              <p>Participates in:</p>
            </th>
            <th>
              <p>More info:</p>
            </th>
          </tr>
        </thead>
      );
      setTableHead(theadJSX);
    });
  }, []);

  const sortedCountries = countries.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    } else return 0;
  });

  const listOfCountries = sortedCountries.map((elem) => {
    const amountOfTreaties = countTreatiesForCountries.find((count) => {
      return count.id === elem.id;
    });

    const amount = amountOfTreaties && amountOfTreaties.count;
    return (
      <CountriesListItem
        key={elem.id}
        amount={amount}
        name={elem.name}
        id={elem.id}
      />
    );
  });

  return (
    <div>
      <ScrollToTopButton />
      <div className="header-and-table">
        {header}
        <table>
          {tableHead && tableHead}
          <tbody>{listOfCountries}</tbody>
        </table>
      </div>
    </div>
  );
};
export default CountriesList;
