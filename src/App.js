import axios from "axios";
import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id, setId) => {
   
   if(characters.find(ch => ch.id == id)){
      alert("Ya existe"); //TODO: Mostrar div con error
   } else {

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
         ({ data }) => {
            if(data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
               //  setCharacters([...characters, data]);
               setId("");
            } else {
               alert("Algo salió mal");
            }
         }
         );
      }
  };

  const onClose = (id) => {
   setCharacters(characters.filter((character) => character.id !== parseInt(id)))
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
