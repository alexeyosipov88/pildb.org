import { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchRequest, setSearchRequest] = useState("");

  useEffect(() => {
    if (searchRequest) {
      axios
        .get(`http://localhost:4000/search/${searchRequest}`)
        .then((result) => {
          console.log(result.data);
          // setTreaties(treaties.data);
        });
    }
  }, [searchRequest]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchRequest(inputValue);
    console.log("submitted");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleInputChange} type="text" />
        <button>SEARCH</button>
      </form>
    </div>
  );
};

export default Search;
