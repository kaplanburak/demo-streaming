import actionTypes from "./ActionTypes";

export const getSeries = () => dispatch => {
  const requestAction = { type: actionTypes.series.GET_LIST_REQUEST };
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
        type: actionTypes.series.GET_LIST_RESPONSE,
        payload: series
      };

      dispatch(responseAction);
    })
    .catch(error => {
      console.log(error);
      const errorAction = { type: actionTypes.series.GET_LIST_ERROR };
      dispatch(errorAction);
    });
};
