import { useState } from "react";
import style from "./searchBar.module.css";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');

   const handleChange = (e) => {
      setId(e.target.value);
  }

   return (
      <div className={style.searchBar}>
         <input type='search' className={style.search} onChange={handleChange} value={id} placeholder="Escriba un id" />
         <button className={style.buttonSearch} onClick={() => onSearch(id, setId)}> 
         Agregar</button>
      </div>
   );
}
