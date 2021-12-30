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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleInputChange} type="text" />
        <button>SEARCH</button>
      </form>
    </div>
  );
};

export default Search;
