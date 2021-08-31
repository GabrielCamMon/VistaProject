import { ActionTypes } from "../constants/action-types";
import { apiAllCharacters, apiCharacter } from "../../api/axios";

// GET_ALL_CHARACTERES
export const getAllCharacteres = (payload) => ({
  type: ActionTypes.GET_ALL_CHARACTERES,
  payload,
});

export const startGetAllCharacteres = (payload = "") => {
  return (dispatch) => {
    return apiAllCharacters(payload)
      .then((e) => {
        console.log(e.data.data.results[0]);
        dispatch(getAllCharacteres(e.data.data.results));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

// GET_CHARACTERE
export const getCharactere = (payload) => ({
  type: ActionTypes.GET_CHARACTERE,
  payload,
});

export const startGetCharactere = (payload = "") => {
  console.log(payload);
  return (dispatch) => {
    return apiCharacter(payload)
      .then((e) => {
        console.log(e.data.data.results);
        dispatch(getCharactere(e.data.data.results[0]));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
