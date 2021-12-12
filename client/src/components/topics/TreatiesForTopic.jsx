import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TreatiesList from "../treaties/TreatiesList";

const TreatiesForTopic = (props) => {
  const [treaties, setTreaties] = useState([]);
  const topicId = useParams().topicId;
  useEffect(() => {
    axios.get(`http://localhost:4000/topics/${topicId}`).then((treaties) => {
      setTreaties(treaties.data);
    });
  }, []);
  // let topic_name = treaties[0] && treaties[0].topic_name;
  // const firstLetter = topic_name.charAt(0);
  // const upperCaseFirstLetter = firstLetter.toUpperCase();
  // topic_name = topic_name.replace(firstLetter, upperCaseFirstLetter);

  let topic_name = treaties[0] && treaties[0].topic_name;
  if(treaties[0]) {
    topic_name = treaties[0].topic_name;
    topic_name = topic_name.split(" ");
    topic_name = topic_name.map((elem) => {
      if(elem.length > 2 && elem !== "and" && elem !== "the") {
        const firstLetter = elem.charAt(0);
        const upperCaseFirstLetter = firstLetter.toUpperCase();
        elem = elem.replace(firstLetter, upperCaseFirstLetter); 
      }
      return elem;
    }).join(" ");

  }
  console.log(treaties);
  return (
    <div>
      <header>
        <h1>{topic_name}</h1>
      </header>
      <TreatiesList treaties={treaties} />
    </div>
  );
};

export default TreatiesForTopic;
