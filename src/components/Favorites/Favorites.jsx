import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards, removeFav, resetFilters } from "../../redux/actions/actions";
import { Card } from "../Card/Card";
import style from "./favorites.module.css";

export default function Favorites() {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [orderSelect, setOrderSelect] = useState("DEFAULT")
  const [filterSelect, setFilterSelect] = useState("DEFAULT")

  const onCloseFavorite = (id) => {
    dispatch(removeFav(id));
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setOrderSelect(value);
    dispatch(orderCards(value));
  }

  const handleFilter = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFilterSelect(value);
    dispatch(filterCards(value));
  }

  const onResetFilters = () => {
    dispatch(resetFilters());
    setFilterSelect("DEFAULT");
    setOrderSelect("DEFAULT");
  }

  return (
    <>
      <div className={style.navFavorites}>
        <select onChange={handleOrder} name="order" defaultValue={"DEFAULT"} value={orderSelect}>
          <option value="DEFAULT" disable>
            Select Order
          </option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>

        <select onChange={handleFilter} name="filter" defaultValue={"DEFAULT"} value={filterSelect}>
          <option value="DEFAULT" disable>
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
        {myFavorites.length === 0 && <h2 className={style.notFound}>No se encontraron personajes favoritos</h2>}
      </div>
    </>
  );
}
