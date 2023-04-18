import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { addFav, removeFav, showNotificacion } from "../../redux/actions/actions";
import style from "./card.module.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const { id, name, status, species, gender, origin, image, onClose } = props;
  const dispatch = useDispatch();
  const { allFavoritesCharacters } = useSelector((state) => state);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
      dispatch(showNotificacion({message: 'Favorite removed successfully 🥳', type: 'success' }));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
      dispatch(showNotificacion({message: 'Favorite added successfully 🥳', type: 'success' }));
    }
  };

  useEffect(() => {

    setIsFav(allFavoritesCharacters.some((fav) => fav.id === id));
  }, [allFavoritesCharacters]);

  return (
    <div className={style.card}>
      <div className={style.close}>
        <button className={style.closeBtn} onClick={() => onClose(id)}>
          X
        </button>
      </div>

      <div className={style.cardBody}>
        <h3 className={`${style[status]} ${style.status}`}>{status}</h3>
        <div className={style.fav} onClick={handleFavorite}>
          <FontAwesomeIcon
            className={isFav ? style.favTrue : style.favFalse}
            icon={faHeart}
          />
        </div>
        <Link className="" to={`/detail/${id}`}>
          <h2 className={style.name}>{name}</h2>
        </Link>
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
