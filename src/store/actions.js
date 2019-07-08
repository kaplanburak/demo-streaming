import actionTypes from "./actionTypes";

export const getMovies = () => dispatch => {
  const requestAction = { type: actionTypes.GET_MOVIES_REQUEST };
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
        type: actionTypes.GET_MOVIES_RESPONSE,
        payload: movies
      };

      dispatch(responseAction);
    })
    .catch(error => {
      console.log(error);

      const errorAction = {
        type: actionTypes.GET_MOVIES_ERROR
      };

      dispatch(errorAction);
    });
};

export const getSeries = () => dispatch => {
  const requestAction = { type: actionTypes.GET_SERIES_REQUEST };
  dispatch(requestAction);

  fetch("./sample.json")
    .then(response => response.json())
    .then(data => {
      const series = data.entries
        .filter(e => e.programType === "series" && e.releaseYear >= 2010)
        .slice(0, 21)
        .sort((a, b) => {
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();

          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        });

      const responseAction = {
        type: actionTypes.GET_SERIES_RESPONSE,
        payload: series
      };

      dispatch(responseAction);
    })
    .catch(error => {
      console.log(error);

      const errorAction = {
        type: actionTypes.GET_SERIES_ERROR
      };

      dispatch(errorAction);
    });
};

export const setPageTitle = title => dispatch => {
  const action = {
    type: actionTypes.SET_PAGE_TITLE,
    payload: title
  };

  dispatch(action);
};
