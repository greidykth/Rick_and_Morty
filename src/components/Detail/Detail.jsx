import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
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

  return (
    <div className={style.containerDetail}>
      {character.name ? (
        <>
        <div className={style.name}>
            <h1>{character.name}</h1>
        </div>
        <div className={style.containerInfo}>
          <div className={style.infoCharacter}>
            <h1 className={character.status === "Alive" ? style.statusAlive : style.statusDead}> {character.status}</h1>
            <div>
            <h3>{character.gender}</h3>
            <h4 className={style.gender}>Gender</h4>
            <h3>{character.species}</h3>
            <h4 className={style.species}>Species</h4>
            <h3>{character.origin?.name}</h3>
            <h4 className={style.origin}>Origin</h4>
            </div>
          </div>
          <div className={style.imgCharacter}>
             {character.image && <img src={character.image} />} {/* TODO: mostrar imagen por defecto */}
          </div>
        </div> 
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}
