import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "../../redux/actions/actions";
import { Card } from "../Card/Card";
import style from "./favorites.module.css";

export default function Favorites() {
  const { myFavorites } = useSelector((state) => state);
    const dispatch = useDispatch();

  const onCloseFavorite = (id) => {
    dispatch(removeFav(id));
  };

  return (
    <div className={style.container}>
      {myFavorites?.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={() => onCloseFavorite(character.id)}
        />
      ))}
    </div>
  );
}
