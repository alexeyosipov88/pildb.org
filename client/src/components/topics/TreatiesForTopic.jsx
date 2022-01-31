import { useState } from "react";
import { useEffect } from "react";
import axiosApi from "../../api/axios-api";
import { useParams } from "react-router-dom";
import TreatiesList from "../treaties/TreatiesList";
import ScrollToTopButton from "../hepler-components/ScrollToTopButton";
import PaddingBeforeRender from "../hepler-components/PaddingBeforeRender";

const TreatiesForTopic = () => {
  const [treaties, setTreaties] = useState([]);
  const [header, setHeader] = useState();
  const topicId = useParams().topicId;
  useEffect(() => {
    axiosApi.get(`/topics/${topicId}`).then((treaties) => {
      setTreaties(treaties.data);
      let topic_name = treaties.data[0].topic_name;
      if (treaties.data[0].topic_name) {
        topic_name = treaties.data[0].topic_name;
        topic_name = topic_name.split(" ");
        topic_name = topic_name
          .map((elem) => {
            if (elem.length > 2 && elem !== "and" && elem !== "the") {
              const firstLetter = elem.charAt(0);
              const upperCaseFirstLetter = firstLetter.toUpperCase();
              elem = elem.replace(firstLetter, upperCaseFirstLetter);
            }
            return elem;
          })
          .join(" ");
      }
      const headerJSX = (
        <header>
          <h1>{topic_name}</h1>
        </header>
      );
      setHeader(headerJSX);
    });
  }, [topicId]);

  return (
    <div>
      <ScrollToTopButton />
      {!header && <PaddingBeforeRender />}
      {header}
      <TreatiesList treaties={treaties} />
    </div>
  );
};

export default TreatiesForTopic;
