import { ADD_FAV, REMOVE_FAV } from "../actions/types_actions";

const initialState = {
  myFavorites: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return {...state, myFavorites: [...state.myFavorites, payload]}

    case REMOVE_FAV:
        return{
           ...state,
           myFavorites: state.myFavorites.filter(element => parseInt(element.id) !== parseInt(payload))
        }

    default:
      return { ...state };
  }
}
