import { ActionTypes } from "../constants/action-types";
const initialState = {
  characters: [],
};

export const charactersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ALL_CHARACTERES:
      return { ...state, characters: payload };
    default:
      return state;
  }
};

export const selectedCharactersReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.GET_CHARACTERE:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_GET_CHARACTERE:
      return {};
    default:
      return state;
  }
};
