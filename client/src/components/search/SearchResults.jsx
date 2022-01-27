import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosApi from "../../api/axios-api";
import SearchListItem from "./SearchListItem";
import ScrollToTop from "../hepler-components/ScrollToTop";

const SearchResults = () => {
  const [searchResult, setSearchResult] = useState();
  
  let keyword = useParams().keyword;
  keyword = keyword.replace(/\s\s+/, " ");
  useEffect(() => {
    const search = async () => {
      let axiosResponse = await axiosApi.get(`search/${keyword}`);
      setSearchResult(axiosResponse.data);
    };
    search();
  }, [keyword]);
  let organizations = searchResult ? searchResult.organizations : [];
  let text = searchResult ? searchResult.text : [];
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
    elem.name = elem.name.split(" ");
    elem.name = elem.name
      .map((elem) => {
        if (elem.length > 2 && elem !== "and" && elem !== "the") {
          const firstLetter = elem.charAt(0);
          const upperCaseFirstLetter = firstLetter.toUpperCase();
          elem = elem.replace(firstLetter, upperCaseFirstLetter);
        }
        return elem;
      })
      .join(" ");
    return elem;
  });
  organizations = organizations.map((elem) => {
    elem.type = "organization";
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
  text = text.map((elem) => {
    elem.type = "text";
    return elem;
  });

  let finalArrayOfResults = countries
    .concat(organizations)
    .concat(topics)
    .concat(treaties)
    .concat(cities)
    .concat(text);

  const convertDateToYearMonthFormat = (date) => {
    date = new Date(date).toLocaleDateString("en-GB");
    if (!date) {
      return;
    }
    date = date.split("/");
    const tmp = date[0];
    date[0] = date[2];
    date[2] = tmp;
    return date.join("/");
  };

  finalArrayOfResults = finalArrayOfResults.map((elem, index) => {
    return (
      <SearchListItem
        city={elem.city}
        entered_into_force={convertDateToYearMonthFormat(
          elem.entered_into_force
        )}
        organization_id={elem.organization_id}
        concluded={convertDateToYearMonthFormat(elem.concluded)}
        keyword={keyword}
        key={index}
        treaty_id={elem.treaty_id}
        text={elem.text}
        id={elem.id}
        name={elem.name}
        type={elem.type}
      />
    );
  });
  return (
    <div className="search-results">
      <ScrollToTop />
      <header>
        <p>
          {finalArrayOfResults.length !== 1
            ? `${finalArrayOfResults.length} results`
            : `${finalArrayOfResults.length} result`}{" "}
          for "{keyword}":
        </p>
      </header>
      <div className="container">{finalArrayOfResults}</div>
    </div>
  );
};

export default SearchResults;
