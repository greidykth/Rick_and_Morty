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
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
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
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    const response = await axios.post(endpoint, character);
    if (response.status === 200) {
      dispatch({
        type: "ADD_FAV",
        payload: response.data,
      });
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    const response = await axios.delete(endpoint);
    if (response.status === 200) {
      dispatch({
        type: "REMOVE_FAV",
        payload: response.data,
      });
    }
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

export function showNotificacion(notification) {
  return {
    type: SHOW_NOTIFICATION,
    payload: notification
  };
}

export function hideNotificacion() {
  return {
    type: HIDE_NOTIFICATION,
  };
}
