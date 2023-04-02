import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_CARDS,
  ORDER,
  RESET,
  LOGIN,
  LOGOUT,
} from "../actions/types_actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  login: false,
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case REMOVE_FAV:
      const newFavorites = state.allCharacters.filter(
        (element) => parseInt(element.id) !== parseInt(payload)
      );
      return {
        ...state,
        myFavorites: newFavorites,
        allCharacters: newFavorites,
      };

    case FILTER_CARDS:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (element) => element.gender === payload
        ),
      };

    case ORDER:
      const favorites = [...state.myFavorites];
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
        myFavorites: newOrder,
      };

    case RESET:
      return {
        ...state,
        myFavorites: [...state.allCharacters],
      };

    case LOGIN:
      return {
        ...state,
        login: true
      };

    case LOGOUT:
      return {
        ...state,
        login: false,
      };

    default:
      return { ...state };
  }
}
