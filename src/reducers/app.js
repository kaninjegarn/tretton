import {
  SET_PROFILES,
  SET_TEXT,
} from "../types";

const initialState = {
  text: ''
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
    default:
  }
  return state;
}

export default app;