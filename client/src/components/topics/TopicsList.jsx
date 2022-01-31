import { useState } from "react";
import { useEffect } from "react";
import axiosApi from "../../api/axios-api";
import TopicsListItem from "./TopicsListItem";
import ScrollToTopButton from "../hepler-components/ScrollToTopButton";
import PaddingBeforeRender from "../hepler-components/PaddingBeforeRender";


const TopicsList = (props) => {
  const [topics, setTopics] = useState([]);
  const [countTreatiesByTopic, setCountTreatiesByTopic] = useState([]);
  const [header, setHeader] = useState();
  const [tableHead, setTableHead] = useState();

  useEffect(() => {
    const countTreatiesForTopics = axiosApi.get("/count-topics");
    const getTopics = axiosApi.get("/topics");
    Promise.all([countTreatiesForTopics, getTopics]).then((result) => {
      setCountTreatiesByTopic(result[0].data);
      setTopics(result[1].data);
      const theadJSX = (
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
      );
      const headerJSX = (
        <header>
          <p>
            The database contains information about the status of multilateral
            treaties related to {result[1].data.length} private intrnational law
            topics.
          </p>
        </header>
      );
      setTableHead(theadJSX);
      setHeader(headerJSX);
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
      <ScrollToTopButton />
      {!header && <PaddingBeforeRender />}
      {header}
      <div>
        <table>
          {tableHead}
          <tbody>{listOfTopics}</tbody>
        </table>
      </div>
    </div>
  );
};
export default TopicsList;
