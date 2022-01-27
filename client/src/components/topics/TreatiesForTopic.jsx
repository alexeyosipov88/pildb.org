import { useState } from "react";
import { useEffect } from "react";
import axiosApi from "../../api/axios-api";
import { useParams } from "react-router-dom";
import TreatiesList from "../treaties/TreatiesList";
import ScrollToTopButton from "../hepler-components/ScrollToTopButton";


const TreatiesForTopic = () => {
  const [treaties, setTreaties] = useState([]);
  const topicId = useParams().topicId;
  useEffect(() => {
    axiosApi.get(`/topics/${topicId}`).then((treaties) => {
      setTreaties(treaties.data);
    });
  }, [topicId]);
  
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
  return (
    <div>
    <ScrollToTopButton/>
      <header>
        <h1>{topic_name}</h1>
      </header>
      <TreatiesList treaties={treaties} />
    </div>
  );
};

export default TreatiesForTopic;
