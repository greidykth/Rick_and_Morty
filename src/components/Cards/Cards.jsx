import Card from "../Card/Card";
import "./cards.css";

export default function Cards({ characters }) {
  return (
    <div className="container">
      {characters.map((character) => 
        <Card
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      )}
    </div>
  );
}
