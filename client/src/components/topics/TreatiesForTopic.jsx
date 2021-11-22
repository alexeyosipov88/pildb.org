import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TreatiesList from "../treaties/TreatiesList";

const TreatiesForTopic = (props) => {
  const [treaties, setTreaties] = useState([]);
  const topicId = useParams().topicId;
  useEffect(() => {
    const getTreatiesByTopic = async () => {
      return await axios.get(`http://localhost:4000/topics/${topicId}`);
    }
    getTreatiesByTopic().
      then((treaties) => {
        setTreaties(treaties.data);
    })
  }, [])
  const topic_name = treaties[0] && treaties[0].topic_name
  console.log(treaties)
  return (
    <div>
      <header>
        <h1>
          {topic_name}
        </h1>
      </header>
      <TreatiesList treaties={treaties}/>
    </div>
  )
}

export default TreatiesForTopic;