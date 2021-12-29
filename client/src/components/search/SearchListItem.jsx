import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const SearchListItem = (props) => {
  let [context, setContext] = useState();
  let [countTreatiesForCountries, setCountTreatiesForCountries] = useState();
  let [countTreatiesForTopic, setCountTreatiesForTopic] = useState();
  let link;
  switch (props.type) {
    case "country":
      link = `/countries/${props.id}`;
      break;
    case "topic":
      link = `/topics/${props.id}`;
      break;
    case "treaty":
      link = `/treaties/${props.id}`;
      break;
    case "city":
      link = `/treaties/${props.id}`;
  }
  useEffect(async () => {
    if (props.type === "country") {
      countTreatiesForCountries = await axios.get(
        "http://localhost:4000/count-treaties"
      );
      countTreatiesForCountries = countTreatiesForCountries.data.find(
        (elem) => elem.id === props.id
      );
    }
    if (props.type === "topic") {
      countTreatiesForTopic = await axios.get(
        "http://localhost:4000/count-topics"
      );
      countTreatiesForTopic = countTreatiesForTopic.data.find(
        (elem) => elem.id === props.id
      );
    }
  }, []);

  let test = props.name;
  test = "hello alex hello alex hello alex";
  test = (<strong>{test}</strong>)
  console.log(test);
  // const testJSX = <h1>hello alex helloe al</h1>;
  //try React HTML Parser!

  console.log(props.name);
  return (
    <div>
      <Link className="link" to={link}>
        <div>{props.name}</div>
        
      </Link>
      {test}
    </div>
  );
};

export default SearchListItem;
