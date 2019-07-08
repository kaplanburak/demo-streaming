import { combineReducers } from "redux";
import actionTypes from "./actionTypes";

const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_MOVIES_RESPONSE:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };
    default:
      return state;
  }
};

const seriesReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_SERIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_SERIES_RESPONSE:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  series: seriesReducer
});
