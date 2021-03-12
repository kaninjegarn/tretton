import store from "../store";

import {
  SET_PROFILES,
  SET_TEXT,
} from "../types";

export const fetchData = async () => {
  return await fetch(`https://api.tretton37.com/ninjas`, {
    method: "GET",
    credentials: "same-origin"
  })
  .then(res => res.json())
  .then(res => {
    setProfiles(res);
  });
};


export const setProfiles = (profiles) => {
  store.dispatch({
    type: SET_PROFILES,
    profiles: profiles
  });
}

export const setText = (text) => {
  store.dispatch({
    type: SET_TEXT,
    text: text
  });
}