import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./cards.module.css";
import Notification from "../Notification/Notification";

export default function Cards({ onClose}) {

  const {allCharacters} = useSelector(state => state)

  return (
    <div className={style.container}>
      {allCharacters.map((character) => 
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={onClose}
        />
      )}
      
    </div>
  );
}
