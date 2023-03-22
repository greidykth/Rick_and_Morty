import { useState } from "react";
import "./searchBar.css";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   const handleChange = (e) => {
      setId(e.target.value);
  }

   return (
      <div className="searchBar">
         <input type='search' className="search" onChange={handleChange} value={id} placeholder="Escriba un id" />
         <button className="buttonSearch" onClick={() => onSearch(id, setId)}> 
         Agregar</button>
      </div>
   );
}
