import { useState } from "react";
import style from "./searchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      onSearch(id, setId)
    }
  };

  return (
    <div className={style.searchBar}>
      <input
        type="search"
        className={style.search}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={id}
        placeholder="Enter id"
      />
      <button
        className={style.buttonSearch}
        onClick={() => onSearch(id, setId)}
      >
        Add character
      </button>

    </div>
  );
}
