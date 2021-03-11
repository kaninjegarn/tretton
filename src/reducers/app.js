import {
  SET_PROFILES,
} from "../types";

const initialState = {
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILES:
      return {
        ...state,
        profiles: action.profiles
      };
    default:
  }
  return state;
}

export default app;