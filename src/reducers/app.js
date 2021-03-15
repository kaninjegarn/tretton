import {
  SET_PROFILES,
  SET_TEXT,
  SET_SORT,
} from "../types";

const initialState = {
  text: "",
  sort: "",
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILES:
      return {
        ...state,
        profiles: action.profiles
      };
    case SET_TEXT:
      return {
        ...state,
        text: action.text
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.sort
      };
    default:
  }
  return state;
}

export default app;