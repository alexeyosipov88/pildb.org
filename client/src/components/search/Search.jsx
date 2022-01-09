import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`/search/${inputValue}`);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="search">
          <input autoComplete="off"
            id="search-input"
            placeholder="Search"
            value={inputValue}
            onChange={handleInputChange}
            type="text"
          />
          <button id="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
