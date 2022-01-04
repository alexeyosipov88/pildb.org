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
    console.log("submitted");
    navigate(`/search/${inputValue}`);
  };
  return (
    <div className="flex flex-column-c">
      <form action="" onSubmit={handleSubmit}>
        <div className="search">
          <input
            id="search-input"
            placeholder="Search"
            value={inputValue}
            onChange={handleInputChange}
            type="text"
          />
          <button id="search-button">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
