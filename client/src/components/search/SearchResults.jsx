import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchListItem from "./SearchListItem";

const SearchResults = () => {
  const [searchResult, setSearchResult] = useState();
  let keyword = useParams().keyword;
  keyword = keyword.replace(/\s\s+/, " ");
  useEffect(async () => {
    let axiosResponse;
    axiosResponse = await axios.get(`http://localhost:4000/search/${keyword}`);
    setSearchResult(axiosResponse.data);
  }, [keyword]);
  let countries = searchResult ? searchResult.countries : [];
  let topics = searchResult ? searchResult.topics : [];
  let treaties = searchResult ? searchResult.treaties : [];
  let cities = searchResult ? searchResult.cities : [];
  countries = countries.map((elem) => {
    elem.type = "country";
    elem.country_id = elem.id;
    return elem;
  });
  topics = topics.map((elem) => {
    elem.type = "topic";
    elem.topic_id = elem.id;
    return elem;
  });
  treaties = treaties.map((elem) => {
    elem.type = "treaty";
    elem.treaty_id = elem.id;
    return elem;
  });
  cities = cities.map((elem) => {
    elem.type = "city";
    elem.treaty_id = elem.id;
    return elem;
  });
  let finalArrayOfResults = countries
    .concat(topics)
    .concat(treaties)
    .concat(cities);

  finalArrayOfResults = finalArrayOfResults.map((elem, index) => {
    return <SearchListItem keyword={keyword} key={index} id={elem.id} name={elem.name} type={elem.type}/>;
  });

  return (
    <div>
      <header>
        <p>Search results:</p>
      </header>
      {finalArrayOfResults}
    </div>
  );
};

export default SearchResults;
