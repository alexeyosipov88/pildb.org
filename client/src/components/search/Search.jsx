import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();

  }
  

  return (
    <div>
      <form
        action=""
      >
        <input value={inputValue} onChange={handleInputChange} type="text" />
        <button onSubmit={handleSubmit}>SEARCH</button>
      </form>
    </div>
  );
};

export default Search;
