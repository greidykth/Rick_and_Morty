import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./nav.module.css";

export default function Nav({ onSearch, logout }) {
  
  return (
    <div className={style.nav}>
      <div className={style.navButtons}>
        <NavLink to="/about">
          <button>About</button>
        </NavLink>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
      </div>
      <div className={style.navSearchLogout}>
        <SearchBar onSearch={onSearch} />
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
