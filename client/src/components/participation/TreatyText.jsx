import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const TreatyText = () => {
  const [treaty, setTreaty] = useState({});
  const treatyId = useParams().treatyId;
  useEffect(() => {
    axios.get(`http://localhost:4000/treaties/${treatyId}`).then((result) => {
      setTreaty(result.data[0]);
    });
  }, [treatyId]);
  const makeHtmlText = (rawText) => {
    if (!rawText) {
      return null;
    }
    let arrRawText = rawText.split(/\n/);
    let id = 1;
    arrRawText = arrRawText.map(elem => {
      elem = <p key={id++}>{elem}</p>;
      return elem;
    })
    return arrRawText;
  };
  return <div className="container">{makeHtmlText(treaty.text)}</div>;
};

export default TreatyText;
