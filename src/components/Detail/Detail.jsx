import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./detail.css";

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
    <div className="containerDetail">
      <div className="infoCharacter">
        {character.name ? (
          <>
            <p>Name: {character.name}</p>
            <p>Status: {character.status}</p>
            <p>Gender: {character.gender}</p>
            <p>Specie: {character.specie}</p>
            <p>Origin: {character.origin?.name}</p>
          </>
        ) : (
          <p>Loading....</p>
        )}
      </div>
      <div className="imgCharacter">
        {character.image && <img src={character.image} />}
      </div>
    </div>
  );
}
