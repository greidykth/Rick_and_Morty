import axios from "axios";
import { useEffect, useState } from "react";
import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Error from "./views/Error.jsx/Error";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "greidykp@gmail.com";
  const PASSWORD = "123456";

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  function logout() {
    setAccess(false);
  }

  const onSearch = (id, setId) => {
    if (characters.find((ch) => ch.id == id)) {
      alert("Ya existe"); //TODO: Mostrar div con error
    } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
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
    setCharacters(
      characters.filter((character) => character.id !== parseInt(id))
    );
  };

  return (
    <div className="App">
      {location.pathname != "/" ? <Nav onSearch={onSearch} logout={logout} /> : ""}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        {/* <Route path="/home" element={<><Nav onSearch={onSearch} /><Cards characters={characters} onClose={onClose} /></>}/> */}
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
