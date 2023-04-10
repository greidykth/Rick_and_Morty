import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Error from "./views/Error.jsx/Error";
import Favorites from "./components/Favorites/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter, login, logout, removeCharacter } from "./redux/actions/actions";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const access = useSelector(state => state.login);
  const {allCharacters} = useSelector(state => state)

  const navigate = useNavigate();
  const EMAIL = "greidykp@gmail.com";
  const PASSWORD = "123456";

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  function loginUser(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      dispatch(login())
      navigate("/home");
    }
  }

  function logoutUser() {
    dispatch(logout())
  }

  const onSearch = (id, setId) => {
    if (allCharacters.find((ch) => ch.id == id)) {
      alert("Ya existe"); //TODO: Mostrar div con error
    } else {
      axios(process.env.REACT_APP_API_URL + id).then(
        ({ data }) => {
          if (data.name) {
            dispatch(addCharacter(data))
            setId("");
          } else {
            alert("Algo salió mal");
          }
        }
      );
    }
  };

  const onClose = (id) => {
    dispatch(removeCharacter(id))
  };

  return (
    <div className="App">
      {location.pathname != "/" ? <Nav onSearch={onSearch} logout={logoutUser} /> : ""}
      <Routes>
        <Route path="/" element={<Form login={loginUser} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} />}
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
