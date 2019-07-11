import { combineReducers } from "redux";
import moviesReducer from "./MoviesReducer";
import seriesReducer from "./SeriesReducer";
import appReducer from "./AppReducer";

export default combineReducers({
  movies: moviesReducer,
  series: seriesReducer,
  app: appReducer
});
