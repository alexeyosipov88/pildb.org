import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [warning, setWarning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let removeWarning = setTimeout(() => setWarning(false), 3000);
    return () => {
      clearTimeout(removeWarning);
    };
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length < 3) {
      setWarning(true);
    } else {
      setWarning(false);
      navigate(`/search/${inputValue}`);
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="search-and-warning">
        <div className="search">
          <input
            autoComplete="off"
            id="search-input"
            placeholder="Search in PILDB"
            value={inputValue}
            onChange={handleInputChange}
            type="text"
          />
          <button id="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div>
          {warning && (
            <div className="fade-in" id="warning">
              Please enter more than 2 characters
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default Search;
