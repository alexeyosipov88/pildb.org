import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import axiosApi from "../../api/axios-api";
import TopicsListItem from "./TopicsListItem";

const TopicsList = (props) => {
  const [topics, setTopics] = useState([]);
  const [countTreatiesByTopic, setCountTreatiesByTopic] = useState([]);

  useEffect(() => {
    const countTreatiesForTopics = axiosApi.get(
      "/count-topics"
    );
    const getTopics = axiosApi.get("/topics");
    Promise.all([countTreatiesForTopics, getTopics]).then((result) => {
      setCountTreatiesByTopic(result[0].data);
      setTopics(result[1].data);
    });
  }, []);
  const listOfTopics = topics.map((elem) => {
    const amountOfTreaties = countTreatiesByTopic.find((topic) => {
      return topic.id === elem.id;
    });
    const amount = amountOfTreaties && amountOfTreaties.count;
    return (
      <TopicsListItem
        key={elem.id}
        name={elem.name}
        id={elem.id}
        amount={amount}
      />
    );
  });

  return (
    <div className="header-and-table">
      <header>
        <p>
          The database contains information about the status of multilateral treaties related to {listOfTopics.length} private intrnational law topics.
        </p>
      </header>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <p>Id</p>
              </th>
              <th>
                <p>Name of the topic</p>
              </th>
              <th>
                <p>Amount of treaties in database</p>
              </th>
              <th>
                <p>more info</p>
              </th>
            </tr>
          </thead>
          <tbody>{listOfTopics}</tbody>
        </table>
      </div>
    </div>
  );
};
export default TopicsList;
