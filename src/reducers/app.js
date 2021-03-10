import {
  SET_PROFILES,
} from "../types";

const initialState = {
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILES:
      return {
        ...state,
        profiles: action.profiles
      };
  }
  return state;
}