import { useState, useEffect } from "react";
import axiosApi from "../../api/axios-api";
import { Link } from "react-router-dom";

const SearchListItem = (props) => {
  let [context, setContext] = useState("");
  let [countTreatiesForCountries, setCountTreatiesForCountries] = useState([]);
  let [countTreatiesForOrganization, setCountTreatiesForOrganization] =
    useState([]);
  let [countTreatiesForTopic, setCountTreatiesForTopic] = useState([]);
  let link;
  switch (props.type) {
    case "organization":
      link = `/organizations/${props.id}`;
      break;
    case "text":
      link = `/treaties/${props.treaty_id}`;
      break;
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
        ? `Entered into force: ${props.entered_into_force}`
        : `Not yet in force`;
      let contextText = `Name of the treaty: ${props.name};  City: ${props.city};  Date of signature: ${props.concluded}; ${status}.`;
      setContext(contextText);
    }
    if (props.type === "text") {
      const makeContextForText = (text, keyword) => {
        let regex = new RegExp(keyword, "i");
        let indexOfkeyword = text.match(regex).index;
        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (i <= indexOfkeyword && indexOfkeyword - 250 <= i) {
            result += text[i];
          }
          if (i > indexOfkeyword && i < 500 + (indexOfkeyword - 50)) {
            result += text[i];
          }
        }
        result = result.split(" ");
        result.shift();
        result.pop();
        result = result.join(" ");
        result = "[... " + result + " ...]";
        return result;
      };
      let finalText = "";
      let keywordArr = props.keyword.split(/\s/);
      for (let i = 0; i < keywordArr.length; i++) {
        let text = makeContextForText(props.text, keywordArr[i]);
        text = text.replace(/\n/g, " ");
        finalText = finalText + text + "\n\n";
      }
      setContext(finalText);
    }
    if (props.type === "country") {
      const setContextForCountry = async () => {
        let count = await axiosApi.get("/count-treaties");
        count = count.data.find((elem) => elem.id === props.id);
        setCountTreatiesForCountries(count);
        let contextText = `This search result matches one of our website's section ??? countries (${props.name}). It has ${countTreatiesForCountries.count} treaties which this country is party of.`;
        setContext(contextText);
      };
      setContextForCountry();
    }
    if (props.type === "organization") {
      const setContextForOrganization = async () => {
        let organization = await axiosApi.get("/organizations");
        organization = organization.data.find((elem) => elem.id === props.id);
        setCountTreatiesForOrganization(organization);
        let contextText = `This search result matches one of our website's section ??? countries (${props.name}). It has ${countTreatiesForOrganization.count} treaties which this country is party of.`;
        setContext(contextText);
      };
      setContextForOrganization();
    }
    if (props.type === "topic") {
      const setTopicContext = async () => {
        let count = await axiosApi.get("/count-topics");
        count = count.data.find((elem) => elem.id === props.id);
        setCountTreatiesForTopic(count);
        let contextText = `This search result matches one of our website's section - private international law topics (${props.name}). It has ${countTreatiesForTopic.count} treaties related to that topic.`;
        setContext(contextText);
      };
      setTopicContext();
    }
    if (props.type === "treaty") {
      let status = props.entered_into_force
        ? `Entered into force: ${props.entered_into_force}`
        : `Not yet in force`;
      let contextText = `Name of the treaty: ${props.name};  City: ${props.city};  Date of signature: ${props.concluded}; ${status}.`;
      setContext(contextText);
    }
  }, [
    countTreatiesForOrganization.count,
    countTreatiesForCountries.count,
    countTreatiesForTopic.count,
    props.city,
    props.concluded,
    props.entered_into_force,
    props.id,
    props.name,
    props.type,
    props.text,
  ]);

  const insertStrongForMultipleKeywords = (string, key) => {
    if (!string || !key) {
      return;
    }
    let arrFromString = string.split(/\s/);
    let keyArr = key.split(/\s/);
    let id = 1;

    for (let i = 0; i < keyArr.length; i++) {
      const regex = new RegExp(keyArr[i], "i");
      arrFromString.forEach((elem, index) => {
        let specialCase = false;
        if (
          (regex.test(elem) && elem.charAt(0) === "(") ||
          (regex.test(elem) && elem.length - keyArr[i].length === 1)
        ) {
          specialCase = true;
        }
        if (
          (regex.test(elem) && elem.length === keyArr[i].length) ||
          specialCase
        ) {
          arrFromString[index] = "`" + elem;
         

        }
      });
    }
    arrFromString.forEach((elem, index) => {
      if (elem.charAt(0) === "`") {
        elem = elem.slice(1);
        let strongKeyword = <strong key={id++}>{elem + " "}</strong>;
        arrFromString[index] = strongKeyword;
      } else arrFromString[index] = elem + " ";
    });

    return arrFromString;
  };

 const contextInfo = {
    country: "countries",
    topic: "topics",
    organization: "organizations",
    text: "text of the treaty",
    treaty: "status of the treaty",
    city: "status of the treaty",
  };



  return (
    <div className="search-list-item">
      <Link
        className="link"
        to={link}
      >
        <div>{insertStrongForMultipleKeywords(props.name, props.keyword)}</div>
      </Link>
      <div className="context-info">
        Found in: {contextInfo[props.type]}
      </div>
      <div>{insertStrongForMultipleKeywords(context, props.keyword)}</div>
    </div>
  );
};

export default SearchListItem;
