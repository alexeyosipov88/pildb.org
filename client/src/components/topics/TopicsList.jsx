import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import TopicsListItem from "./TopicsListItem";

const TopicsList = (props) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/topics").then((topics) => {
      setTopics(topics.data);
    });
  }, []);
  const listOfTopics = topics.map((elem) => {
    return (
      <div key={elem.id}>
        <TopicsListItem name={elem.name} id={elem.id} />
      </div>
    );
  });

  return <div>{listOfTopics}</div>;
};
export default TopicsList;
