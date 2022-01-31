import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosApi from "../../api/axios-api";
import SearchListItem from "./SearchListItem";
import ScrollToTopButton from "../hepler-components/ScrollToTopButton";
import PaddingBeforeRender from "../hepler-components/PaddingBeforeRender";


const SearchResults = () => {
  const [searchResult, setSearchResult] = useState();
  const [header, setHeader] = useState();

  let keyword = useParams().keyword;
  keyword = keyword.replace(/\s\s+/, " ");
  useEffect(() => {
    const search = async () => {
      let axiosResponse = await axiosApi.get(`search/${keyword}`);
      let organizations = axiosResponse.data.organizations;
      let text = axiosResponse.data.text;
      let countries = axiosResponse.data.countries;
      let topics = axiosResponse.data.topics;
      let treaties = axiosResponse.data.treaties;
      let cities = axiosResponse.data.cities;
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
      setSearchResult(finalArrayOfResults);
      const headerJSX = (
        <header>
          <p>
            {finalArrayOfResults.length !== 1
              ? `${finalArrayOfResults.length} results`
              : `${finalArrayOfResults.length} result`}{" "}
            for "{keyword}":
          </p>
        </header>
      );

      setHeader(headerJSX)
    };
    search();
  }, [keyword]);
  return (
    <div className="search-results">
      <ScrollToTopButton />
      {!header && <PaddingBeforeRender />}
      {header}  
      <div className="container">{searchResult}</div>
    </div>
  );
};

export default SearchResults;
