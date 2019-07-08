import actionTypes from "./ActionTypes";

export const getMovies = () => dispatch => {
  const requestAction = { type: actionTypes.movies.GET_LIST_REQUEST };
  dispatch(requestAction);

  fetch("./sample.json")
    .then(response => response.json())
    .then(data => {
      const movies = data.entries
        .filter(e => e.programType === "movie" && e.releaseYear >= 2010)
        .slice(0, 21)
        .sort((a, b) => {
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();

          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        });

      const responseAction = {
        type: actionTypes.movies.GET_LIST_RESPONSE,
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
