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

export function addFav(character) {
  return {
    type: ADD_FAV,
    payload: character,
  };
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}


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
