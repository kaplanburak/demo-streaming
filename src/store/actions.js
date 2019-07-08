import actionTypes from "./actionTypes";

export const getMovies = () => (dispatch, getState) => {
  const requestAction = { type: actionTypes.GET_MOVIES_REQUEST };

  dispatch(requestAction);

  fetch('')
};
