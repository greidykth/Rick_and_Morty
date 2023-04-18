import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterFavoriteCharacters, orderFavoritesCharacters, removeFav, resetFilters, showNotificacion } from "../../redux/actions/actions";
import { Card } from "../Card/Card";
import style from "./favorites.module.css";

export default function Favorites() {
  const { favoritesFilteredCharacters } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [orderSelect, setOrderSelect] = useState("DEFAULT")
  const [filterSelect, setFilterSelect] = useState("DEFAULT")

  const onCloseFavorite = (id) => {
    dispatch(removeFav(id));
    dispatch(showNotificacion({message: 'Favorite removed successfully 🥳', type: 'success' }));
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setOrderSelect(value);
    dispatch(orderFavoritesCharacters(value));
  }

  const handleFilter = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setFilterSelect(value);
    dispatch(filterFavoriteCharacters(value));
  }

  const onResetFilters = () => {
    dispatch(resetFilters());
    setFilterSelect("DEFAULT");
    setOrderSelect("DEFAULT");
  }

  return (
    <>
      <div className={style.navFavorites}>
        <select onChange={handleOrder} name="order" value={orderSelect}>
          <option value="DEFAULT" disabled>
            Select Order
          </option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>

        <select onChange={handleFilter} name="filter" value={filterSelect}>
          <option value="DEFAULT" disabled>
            Select Filter
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <button className={style.reset} onClick={onResetFilters}>Reset Filters</button>
      </div>
      <div className={style.container}>
        {favoritesFilteredCharacters?.map((character) => (
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
        {favoritesFilteredCharacters.length === 0 && <h2 className={style.notFound}>There are not favorites characters to show</h2>}
      </div>
    </>
  );
}
