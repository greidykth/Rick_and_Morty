import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [isFav, setIsFav] = useState(false);
  const { allFavoritesCharacters } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axios(process.env.REACT_APP_API_URL + id).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  useEffect(() => {
    // allFavoritesCharacters.forEach((fav) => {
    //   if (fav.id === id) {
    //     setIsFav(true);
    //   }
    // });
    setIsFav(allFavoritesCharacters.some((fav) => parseInt(fav.id) === parseInt(id)));
  }, [id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(character));
    }
  };

  return (
    <div className={style.containerDetail}>
      {character.name ? (
        <>
          <div className={style.name}>
            <h1>{character.name}</h1>
          </div>
          <div className={style.containerInfo}>
            <div className={style.infoCharacter}>
              <h1
                className={`${style.status} ${
                  style["status" + character.status]
                }`}
              >
                {" "}
                {character.status}
              </h1>
              <div>
                <h1>{character.gender}</h1>
                <h4 className={style.gender}>Gender</h4>
                <h1>{character.species}</h1>
                <h4 className={style.species}>Species</h4>
                <h1>{character.origin?.name}</h1>
                <h4 className={style.origin}>Origin</h4>
              </div>
            </div>
            <div className={style.imgCharacter}>
              <div className={style.fav} onClick={handleFavorite}>
                <FontAwesomeIcon
                  className={isFav ? style.favTrue : style.favFalse}
                  icon={faHeart}
                />
              </div>
              {character.image && <img src={character.image} alt={`image_${character.name}`}/>}{" "}
              {/* TODO: mostrar imagen por defecto */}
            </div>
          </div>
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}
