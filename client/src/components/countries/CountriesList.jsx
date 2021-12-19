import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CountriesListItem from "./CountriesListItem";

const CountriesList = (props) => {
  const [countries, setCountries] = useState([]);
  const [countTreatiesForCountries, setCountTreatiesForCountries] = useState(
    []
  );

  useEffect(() => {
    const countTreatiesForCountries = axios.get(
      "http://localhost:4000/count-treaties"
    );
    const getCountries = axios.get("http://localhost:4000/countries");
    Promise.all([countTreatiesForCountries, getCountries]).then((result) => {
      setCountTreatiesForCountries(result[0].data);
      setCountries(result[1].data);
    });
  }, []);
  console.log(countTreatiesForCountries);
  const listOfCountries = countries.map((elem) => {
    const amountOfTreaties = countTreatiesForCountries.find((count) => {
      return count.id === elem.id;
    });
    const amount = amountOfTreaties && amountOfTreaties.count;
    console.log(amount);
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
  );
};
export default CountriesList;
