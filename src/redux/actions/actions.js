import {
  ADD_FAV,
  REMOVE_FAV,
  LOGIN,
  LOGOUT,
  FILTER_FAVORITES_CHARACTERS,
  ORDER_FAVORITES_CHARACTERS,
  ADD_CHARACTER,
  REMOVE_CHARACTER,
  RESET_FILTERS,
} from "./types_actions";
import axios from "axios";

export function addCharacter(character) {
  return {
    type: ADD_CHARACTER,
    payload: character,
  };
}

export function removeCharacter(id) {
  return {
    type: REMOVE_CHARACTER,
    payload: id,
  };
}

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return (dispatch) => {
     axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
           type: 'ADD_FAV',
           payload: data,
        });
     });
  };
};

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: 'REMOVE_FAV',
           payload: data,
     });
     });
  };
};

export function filterFavoriteCharacters(gender) {
  return {
    type: FILTER_FAVORITES_CHARACTERS,
    payload: gender,
  };
}

export function orderFavoritesCharacters(order) {
  return {
    type: ORDER_FAVORITES_CHARACTERS,
    payload: order,
  };
}

export function resetFilters() {
  return {
    type: RESET_FILTERS,
  };
}

export function login() {
  return {
    type: LOGIN,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
