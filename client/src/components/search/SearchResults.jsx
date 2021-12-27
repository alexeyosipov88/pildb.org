import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchListItem from "./SearchListItem";

const SearchResults = () => {
  const [searchResult, setSearchResult] = useState();
  let keyword = useParams().keyword;
  console.log(keyword);
  keyword = keyword.replace(/\s\s+/, " ");
  useEffect(async () => {
    let axiosResponse;
    axiosResponse = await axios.get(`http://localhost:4000/search/${keyword}`);
    setSearchResult(axiosResponse.data);
  }, [keyword]);
  console.log(searchResult, "Result outside useEffect");
  const countries = searchResult ? searchResult.countries : [];
  const topics = searchResult ? searchResult.topics : [];
  const treaties = searchResult ? searchResult.treaties : [];
  let finalArrayOfResults = countries.concat(topics).concat(treaties);
  console.log(finalArrayOfResults, "this is final");

  finalArrayOfResults = finalArrayOfResults.map((elem, index) => {
    return <SearchListItem key={index} name={elem.name}/>;
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
