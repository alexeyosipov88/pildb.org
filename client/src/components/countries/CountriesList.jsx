import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import axiosApi from "../../api/axios-api";
import CountriesListItem from "./CountriesListItem";

const CountriesList = (props) => {
  const [countries, setCountries] = useState([]);
  const [countTreatiesForCountries, setCountTreatiesForCountries] = useState(
    []
  );
  useEffect(() => {
    const countTreatiesForCountries = axiosApi.get(
      "/count-treaties"
    );
    const getCountries = axiosApi.get("/countries");

    Promise.all([countTreatiesForCountries, getCountries]).then((result) => {
      setCountTreatiesForCountries(result[0].data);
      setCountries(result[1].data);
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
      <div className="header-and-table">
      <header>
        <p>
          The database contains information about participation of
          {countries.length} countries in multilateral treaties related to
          private international law.
        </p>
      </header>
        <table>
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
          <tbody>{listOfCountries}</tbody>
        </table>
      </div>
    </div>
  );
};
export default CountriesList;
