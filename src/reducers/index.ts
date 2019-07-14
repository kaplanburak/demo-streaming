import { combineReducers } from "redux";
import moviesReducer from "./Movies";
import seriesReducer from "./Series";
import appReducer from "./App";

export default combineReducers({
  movies: moviesReducer,
  series: seriesReducer,
  app: appReducer
});
