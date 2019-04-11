import { combineReducers } from "redux";

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE
} from "../actions";

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        loggingIn: true
      };
    }

    case LOGIN_SUCCESS: {
    }

    case LOGIN_FAILURE: {
    }

    case FETCH_START: {
    }

    case FETCH_SUCCESS: {
      return {
        ...state,
        friends: action.friends
      };
    }

    case FETCH_FAILURE: {
    }

    case ADD_FRIEND_START: {
    }

    case ADD_FRIEND_SUCCESS: {
      return {
        ...state,
        friends: action.friends
      };
    }

    case ADD_FRIEND_FAILURE: {
    }

    default:
      return state;
  }
};

export default rootReducer;
