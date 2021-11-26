import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import HomeTopicsListItem from "./HomeTopicsListItem";



const HomeTopicsList = (props) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/topics").then((topics) => {
      setTopics(topics.data);
    });
  }, []);

  const listOfTopics = topics.map((elem) => {
    return (
        <HomeTopicsListItem key={elem.id} name={elem.name} id={elem.id} />
    );
  });

  return <div className="topics flex flex-fw-w">{listOfTopics}</div>;
};
export default HomeTopicsList;
