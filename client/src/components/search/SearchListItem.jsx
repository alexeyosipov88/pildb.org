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

  const insertStrong = (string, keyword) => {
    if (!string || !keyword) {
      return;
    }
    let id = 1;
    let regex = new RegExp(keyword, "i");
    keyword = string.match(regex);
    let array = string.split(keyword);
    for (let i = 0; i < array.length - 1; i += 2) {
      let strongKeyword = <strong key={id++}>{keyword}</strong>;
      for (let j = array.length; j > i; j--) {
        array[j] = array[j - 1];
      }
      array[i + 1] = strongKeyword;
    }
    return array;
  };
  return (
    <div>
      <Link className="link" to={link}>
        <div>{insertStrong(props.name, props.keyword)}</div>
      </Link>
    </div>
  );
};

export default SearchListItem;
