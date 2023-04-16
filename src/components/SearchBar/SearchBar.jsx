import { useState } from "react";
import style from "./searchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    if (Number(e.target.value) || e.target.value === "") {
      setId(e.target.value);
    } else {
      alert("El id debe ser un numero mayor a 0")
    }
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
