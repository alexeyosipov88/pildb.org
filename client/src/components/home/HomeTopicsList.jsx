import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import axiosApi from "../../api/axios-api";
import HomeTopicsListItem from "./HomeTopicsListItem";
import topicsIconsObject from '../../images/topics-icons/topics-icons-object.js';


const HomeTopicsList = (props) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axiosApi.get("/topics").then((topics) => {
      setTopics(topics.data);
    });
  }, []);

  const listOfTopics = topics.map((elem) => {
    const iconImage = topicsIconsObject[elem.id];
    return (
        <HomeTopicsListItem key={elem.id} img={iconImage} name={elem.name} id={elem.id} />
    );
  });

  return <div className="topics flex flex-fw-w">{listOfTopics}</div>;
};
export default HomeTopicsList;
