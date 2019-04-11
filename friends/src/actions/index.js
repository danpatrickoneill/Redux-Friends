import axios from "axios";

import axiosWithAuth from "../utils/axiosAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({
        type: LOGIN_SUCCESS,
        token: res.data.payload
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: LOGIN_FAILURE,
        err
      });
    });
};

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_START });
  axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      dispatch({
        type: FETCH_SUCCESS,
        friends: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCH_FAILURE,
        err
      });
    });
};
