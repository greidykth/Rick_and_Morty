import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./nav.css";

export default function Nav({ onSearch }) {
  return (
    <div className="nav">
      <div className="navButtons">
        <NavLink to="/about">
          <button>About</button>
        </NavLink>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
