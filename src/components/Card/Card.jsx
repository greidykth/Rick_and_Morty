import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import style from "./card.module.css";

export function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
  onClose,
  addFav,
  removeFav,
}) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav());
    }
  };

  return (
    <div className={style.card}>
      <div className={style.close}>
        <button className={style.closeBtn} onClick={() => onClose(id)}>
          X
        </button>
      </div>

      <div className={style.cardBody}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <h3 className={style.status}>{status}</h3>
        <NavLink to={`/detail/${id}`}>
          <h2 className={style.name}>{name}</h2>
        </NavLink>
        <p className={style.species}>{species}</p>
        <p className={style.gender}>{gender}</p>
        <p className={style.origin}>{origin.name}</p>
      </div>
      <div className={style.cardImage}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: () => {
      dispatch(addFav());
    },
    removeFav: () => {
      dispatch(removeFav());
    },
  };
}

export default connect(null, mapDispatchToProps)(Card);
