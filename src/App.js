import axios from "axios";
import { useEffect } from "react";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Error from "./views/Error.jsx/Error";
import Favorites from "./components/Favorites/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter, login, logout, removeCharacter, showNotificacion, } from "./redux/actions/actions";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const access = useSelector(state => state.login);
  const { allCharacters, notification } = useSelector(state => state)

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
      dispatch(showNotificacion({message: 'Welcome to Rick and morty app!! 🥳', type: 'success' }));
    }
  }

  function logoutUser() {
    dispatch(logout());
    dispatch(showNotificacion({message: 'Come back soon!! 👋', type: 'success' }));
  }

  const onSearch = (id, setId) => {
    if (!Number(id)) {
      dispatch(showNotificacion({message: 'Id must be a number greater than 0 😢', type: 'error' }));
    } else if (allCharacters.find((ch) => ch.id === Number ( id))) {
      dispatch(showNotificacion({message: 'Id already exist 😢', type: 'error' }));
    } else {
      axios(process.env.REACT_APP_API_URL + id).then(
        ({ data }) => {
          if (data.name) {
            dispatch(addCharacter(data))
            dispatch(showNotificacion({message: 'Character added successfully 🥳', type: 'success' }));
            setId("");
          } else {
            dispatch(showNotificacion({message: 'Something went wrong 😓', type: 'error' }));
          }
        }
      );
    }
  };

  const onClose = (id) => {
    dispatch(removeCharacter(id));
    dispatch(showNotificacion({message: 'Character removed successfully 🥳', type: 'success' }));
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} logout={logoutUser} /> : ""}
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
      { notification.message !== "" &&
          <Notification />
      }
    </div>
  );
}

export default App;
