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
} from "../actions/types_actions";

const initialState = {
  favoritesFilteredCharacters: [],
  allCharacters: [],
  allFavoritesCharacters: [],
  login: false,
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CHARACTER:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
      };

    case REMOVE_CHARACTER:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (element) => parseInt(element.id) !== parseInt(payload)
        ),
      };

    case ADD_FAV:
      return {
        ...state,
        favoritesFilteredCharacters: [...state.allFavoritesCharacters, payload],
        allFavoritesCharacters: [...state.allFavoritesCharacters, payload],
      };

    case REMOVE_FAV:
      const newFavorites = state.allFavoritesCharacters.filter(
        (element) => parseInt(element.id) !== parseInt(payload)
      );
      return {
        ...state,
        favoritesFilteredCharacters: newFavorites,
        allFavoritesCharacters: newFavorites,
      };

    case FILTER_FAVORITES_CHARACTERS:
      return {
        ...state,
        favoritesFilteredCharacters: state.allFavoritesCharacters.filter(
          (element) => element.gender === payload
        ),
      };

    case ORDER_FAVORITES_CHARACTERS:
      const favorites = [...state.favoritesFilteredCharacters];
      const newOrder = favorites.sort((a, b) => {
        if (a.id > b.id) {
          return "ASC" === payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "DESC" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        favoritesFilteredCharacters: newOrder,
      };

    case RESET_FILTERS:
      return {
        ...state,
        favoritesFilteredCharacters: [...state.allFavoritesCharacters],
      };

    case LOGIN:
      return {
        ...state,
        login: true,
      };

    case LOGOUT:
      return {
        ...initialState,
      };

    default:
      return { ...state };
  }
}
