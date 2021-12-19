import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import TopicsListItem from "./TopicsListItem";

const TopicsList = (props) => {
  const [topics, setTopics] = useState([]);
  const [countTreatiesByTopic, setCountTreatiesByTopic] = useState([]);

  useEffect(() => {
    const countTreatiesForTopics = axios.get(
      "http://localhost:4000/count-topics"
    );
    const getTopics = axios.get("http://localhost:4000/topics");
    Promise.all([countTreatiesForTopics, getTopics]).then((result) => {
      setCountTreatiesByTopic(result[0].data);
      setTopics(result[1].data);
    });
  }, []);
  let id = 1;
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
  );
};
export default TopicsList;
