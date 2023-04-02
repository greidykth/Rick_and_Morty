import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_CARDS,
  ORDER,
  RESET,
  LOGIN,
  LOGOUT,
} from "./types_actions";

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

export function filterCards(gender) {
  return {
    type: FILTER_CARDS,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export function resetFilters() {
  return {
    type: RESET,
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
