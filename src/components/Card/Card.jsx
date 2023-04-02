import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import style from "./card.module.css";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const { id, name, status, species, gender, origin, image, onClose } = props;
  const dispatch = useDispatch();
  const { allCharacters } = useSelector((state) => state);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [allCharacters]);

  return (
    <div className={style.card}>
      <div className={style.close}>
        <button className={style.closeBtn} onClick={() => onClose(id)}>
          X
        </button>
      </div>

      <div className={style.cardBody}>
        <h3 className={`${style[status]} ${style.status}`}>{status}</h3>
        <div className={style.fav}>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
        </div>
        <Link className="" to={`/detail/${id}`}>
          <h2 className={style.name}>{name}</h2>
        </Link>
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
