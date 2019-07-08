import { combineReducers } from "redux";
import actionTypes from "./actionTypes";

const initialState = {
  isLoading: true,
  gotError: false,
  list: []
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_MOVIES_RESPONSE:
      return {
        isLoading: false,
        gotError: false,
        list: action.payload
      };
    case actionTypes.GET_MOVIES_ERROR:
      return {
        isLoading: false,
        gotError: true,
        list: []
      };
    default:
      return state;
  }
};

const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SERIES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_SERIES_RESPONSE:
      return {
        isLoading: false,
        gotError: false,
        list: action.payload
      };
    case actionTypes.GET_SERIES_ERROR:
      return {
        isLoading: false,
        gotError: true,
        list: []
      };
    default:
      return state;
  }
};

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_PAGE_TITLE:
      return {
        pageTitle: action.payload
      };
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  series: seriesReducer,
  app: appReducer
});
