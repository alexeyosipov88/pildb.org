import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchListItem = (props) => {
  let [context, setContext] = useState("");
  let [countTreatiesForCountries, setCountTreatiesForCountries] = useState([]);
  let [countTreatiesForTopic, setCountTreatiesForTopic] = useState([]);
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
      break;
    default:
      break;
  }
  useEffect(() => {
    if (props.type === "city") {
      let status = props.entered_into_force
        ? `Entered info force: ${props.entered_into_force}`
        : `Not yet into force`;
      let contextText = `Name of the treaty: ${props.name};  City: ${props.city};  Date of signature: ${props.concluded}; ${status}.`;
      setContext(contextText);
    }
    if (props.type === "country") {
      const setContextForCountry = async () => {
        let count = await axios.get(
          "http://localhost:4000/count-treaties"
        );
        count = count.data.find(
          (elem) => elem.id === props.id
        );
        setCountTreatiesForCountries(count);
        let contextText = `The search with the key from your input matches one of our website's section - countries (${props.name}). It has ${countTreatiesForCountries.count} treaties related to that topic.`;
        setContext(contextText);
      };
      setContextForCountry();
    }
    if (props.type === "topic") {
      const setTopicContext = async () => {
        let count = await axios.get(
          "http://localhost:4000/count-topics"
        );
        count = count.data.find(
          (elem) => elem.id === props.id
        );
        setCountTreatiesForTopic(count);
        let contextText = `The search with the key from your input matches one of our website's section - private international law topics (${props.name}). It has ${countTreatiesForTopic.count} treaties related to that topic.`;
        setContext(contextText);
      };
      setTopicContext();
    }
    if (props.type === "treaty") {
      let status = props.entered_into_force
        ? `Entered info force: ${props.entered_into_force}`
        : `Not yet into force`;
      let contextText = `Name of the treaty: ${props.name};  City: ${props.city};  Date of signature: ${props.concluded}; ${status}.`;
      setContext(contextText);
    }
  }, [countTreatiesForCountries.count, countTreatiesForTopic.count, props.city, props.concluded, props.entered_into_force, props.id, props.name, props.type]);

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
      <div>{insertStrong(context, props.keyword)}</div>
    </div>
  );
};

export default SearchListItem;
