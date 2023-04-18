import { useState } from "react";
import style from "./searchBar.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { showNotificacion } from "../../redux/actions/actions";
import Notification from "../Notification/Notification";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notification } = useSelector((state) => state);

  const handleChange = (e) => {
    if (Number(e.target.value) || e.target.value === "") {
      setId(e.target.value);
    } else {
      dispatch(showNotificacion({message: 'Id must be a number greater than 0 😢', type: 'error' }));
    }
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      onSearch(id, setId);
    }
  };

  const handleSearch = () => {
    onSearch(id, setId);
    navigate("/home");
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
      <button className={style.buttonSearch} onClick={handleSearch}>
        <FontAwesomeIcon className={style.plusIcon} icon={faPlus} />
        <span className={style.textButtonAdd}>Add character</span>
      </button>
      { notification.message !== "" &&
          <Notification />
      }
    </div>
  );
}
