import { ThunkAction } from "redux-thunk";
import actionTypes from "./ActionTypes";
import { TReduxState, IMovie, IAction } from "../interfaces";

export const getMovies = (): ThunkAction<IAction, TReduxState, null, IAction> => (dispatch): any => {
  const requestAction = { type: actionTypes.movies.GET_LIST_REQUEST };
  dispatch(requestAction);

  fetch("./sample.json")
    .then(response => response.json())
    .then(data => {
      const movies = data.entries
        .filter((e: IMovie) => e.programType === "movie" && e.releaseYear >= 2010)
        .slice(0, 21)
        .sort((a: IMovie, b: IMovie) => {
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();

          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        });

      const responseAction = {
        type: actionTypes.movies.GET_LIST_SUCCESS,
        payload: movies
      };

      dispatch(responseAction);
    })
    .catch(error => {
      console.log(error);
      const errorAction = { type: actionTypes.movies.GET_LIST_ERROR };
      dispatch(errorAction);
    });
};
