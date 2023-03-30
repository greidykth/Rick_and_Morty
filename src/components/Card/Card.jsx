import { Link, NavLink } from 'react-router-dom';
import style from './card.module.css'

export default function Card({
   name,
   status,
   species,
   gender,
   origin,
   image,
   id,
   onClose}) {
   return (
      <div className={style.card}>
         <div className={style.close}>
            <button className={style.closeBtn} onClick={() => onClose(id)}>X</button>
         </div>
         <div className={style.cardBody}>
            <h3 className={style.status}>{status}</h3>
         <NavLink to={`/detail/${id}`}>
            <h2 className={style.name}>{name}</h2>
         </NavLink>
            <p className={style.species}>{species}</p>
            <p className={style.gender}>{gender}</p>
            <p className={style.origin}>{origin.name}</p>
         </div>
         <div className={style.cardImage}>
            <img src={image} alt='' /> 
         </div>
      </div>
   );
}

