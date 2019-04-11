import { combineReducers } from "redux";

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions";

const initialState = {
  friends: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
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

    default:
      return state;
  }
};

export default rootReducer;
